import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { EIAData } from '../../../models/eiadata'

// Dynamic imports to prevent loading issues
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { PermitService } from '../../../../services/permit';

@Component({
  selector: 'app-eia',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './eia.html',
  styleUrls: ['./eia.css']
})
// eia.component.ts (key fixes)
export class EiaFormComponent implements AfterViewInit, OnInit {

  @Output() formChange = new EventEmitter<any>();

  // Applicant data (always visible)
  formData = {
    applicant: '',
    contact: '',
    email: '',
    projectName: '',
    category: 'EIA',
    description: '',
    status: 'Pending'
  };

  // EIA-specific data
  data: EIAData = {
    projectDescription: '',
    projectSize: '',
    projectLifespan: '',
    location: '',
    lat: null,
    lng: null,
    materials: '',
    products: '',
    landAllocated: '',
    currentLandUse: '',
    landUseChange: '',
    negativeImpacts: '',
    positiveImpacts: '',
    mitigation: '',
    additionalInfo: ''
  };

  currentStep = 1;
  selectedFiles: File[] = [];
  isSubmitting = false;

  // Map properties
  @ViewChild('mapViewNode', { static: false }) mapEl!: ElementRef<HTMLDivElement>;
  view: MapView | null = null;
  graphicsLayer = new GraphicsLayer();
  sketchVM: SketchViewModel | null = null;
  selectedGraphic: Graphic | null = null;
  selectedGeometryType: 'point' | 'polygon' = 'point';
  isMapInitialized = false;
  mapLoadError = false;

  constructor(private permitService: PermitService) {}

  ngOnInit() {
    console.log('EIA Component Initialized');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeMap();
    }, 500);
  }

  @ViewChild('mapViewNode')
set mapContainer(el: ElementRef<HTMLDivElement> | undefined) {
  if (el && this.currentStep === 2 && !this.isMapInitialized) {
    this.mapEl = el;
    setTimeout(() => this.initializeMap(), 0);
  }
}

  private initializeMap(): void {
    try {
      if (!this.mapEl?.nativeElement) {
        console.error('Map container not found');
        this.mapLoadError = true;
        return;
      }

      const map = new Map({
        basemap: "topo-vector",
        layers: [this.graphicsLayer]
      });

      this.view = new MapView({
        container: this.mapEl.nativeElement,
        map: map,
        center: [25.91, -24.65],
        zoom: 10
      });

      this.view.when(() => {
        console.log('Map loaded successfully');
        this.isMapInitialized = true;
        this.setupSketchViewModel();
      }).catch((error) => {
        console.error('Map view error:', error);
        this.mapLoadError = true;
      });
    } catch (error) {
      console.error('Map initialization error:', error);
      this.mapLoadError = true;
    }
  }

  private setupSketchViewModel(): void {
    if (!this.view) return;

    try {
      this.sketchVM = new SketchViewModel({
        view: this.view,
        layer: this.graphicsLayer,
        defaultCreateOptions: { mode: "click" }
      });

      this.sketchVM.on("create", (event) => {
        if (event.state === "complete") {
          this.selectedGraphic = event.graphic;
          const geom: any = event.graphic.geometry;

          if (geom.type === "point") {
            this.data.lat = geom.latitude;
            this.data.lng = geom.longitude;
            this.data.location = `Lat: ${geom.latitude.toFixed(6)}, Lng: ${geom.longitude.toFixed(6)}`;
          } else if (geom.type === "polygon") {
            const centroid = geom.centroid;
            this.data.lat = centroid.latitude;
            this.data.lng = centroid.longitude;
            this.data.location = `Polygon area (Centroid: ${centroid.latitude.toFixed(6)}, ${centroid.longitude.toFixed(6)})`;
          }

          this.emitFormChange();
        }
      });
    } catch (error) {
      console.error('SketchViewModel error:', error);
    }
  }

  setGeometryType(type: 'point' | 'polygon'): void {
    this.selectedGeometryType = type;

    if (!this.sketchVM) {
      alert('Map is still loading. Please wait...');
      return;
    }

    try {
      this.sketchVM.cancel();
      this.graphicsLayer.removeAll();
      this.selectedGraphic = null;

      if (type === 'point') {
        this.sketchVM.create("point");
      } else if (type === 'polygon') {
        this.sketchVM.create("polygon");
      }
    } catch (error) {
      console.error('Error creating geometry:', error);
    }
  }

  nextStep(): void {
    if (this.validateStep()) {
      this.currentStep++;
      this.emitFormChange();
    }
  }

  prevStep(): void {
    this.currentStep--;
  }

  validateStep(): boolean {
    // Step 1: Project Details
    if (this.currentStep === 1) {
      if (!this.data.projectDescription?.trim()) {
        alert('Please enter project description');
        return false;
      }
      if (!this.data.projectSize?.trim()) {
        alert('Please enter project size');
        return false;
      }
    }

    // Step 2: Map Location
    if (this.currentStep === 2) {
      if (!this.data.lat || !this.data.lng) {
        alert('Please draw project location on the map');
        return false;
      }
    }

    return true;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.selectedFiles = Array.from(input.files);
  }

  private emitFormChange(): void {
    const combinedData = {
      ...this.formData,
      ...this.data,
      applicationType: 'EIA'
    };
    this.formChange.emit(combinedData);
  }

  private generatePermitRef(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `EIA-${year}-${random}`;
  }

  submitForm(): void {
    // Validate all required fields
    if (!this.formData.applicant?.trim()) {
      alert('Please enter applicant name');
      return;
    }
    if (!this.formData.contact?.trim()) {
      alert('Please enter contact number');
      return;
    }
    if (!this.formData.email?.trim()) {
      alert('Please enter email address');
      return;
    }
    if (!this.formData.projectName?.trim()) {
      alert('Please enter project name');
      return;
    }
    if (!this.data.lat || !this.data.lng) {
      alert('Please select a location on the map');
      return;
    }

    this.isSubmitting = true;
    const permitRef = this.generatePermitRef();

    const payload = new FormData();

    // Add applicant data
    payload.append('applicant', this.formData.applicant);
    payload.append('contact', this.formData.contact);
    payload.append('email', this.formData.email);
    payload.append('projectName', this.formData.projectName);
    payload.append('category', this.formData.category);
    payload.append('description', this.data.projectDescription);
    payload.append('status', this.formData.status);
    payload.append('permitRef', permitRef);
    payload.append('applicationType', 'EIA');

    // Add location data
    payload.append('location', this.data.location);
    payload.append('lat', String(this.data.lat));
    payload.append('lng', String(this.data.lng));

    // Add EIA-specific data
    payload.append('eiaData', JSON.stringify(this.data));

    // Add files
    this.selectedFiles.forEach(file => {
      payload.append('documents', file);
    });

    this.permitService.createPermit(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        alert(`EIA Application submitted successfully!\nReference: ${permitRef}`);
        this.resetForm();
        this.emitFormChange();
      },
      error: (err) => {
        this.isSubmitting = false;
        console.error('Submission error:', err);
        alert('Submission failed. Please try again.');
      }
    });
  }

  private resetForm(): void {
    this.formData = {
      applicant: '',
      contact: '',
      email: '',
      projectName: '',
      category: 'EIA',
      description: '',
      status: 'Pending'
    };

    this.data = {
      projectDescription: '',
      projectSize: '',
      projectLifespan: '',
      location: '',
      lat: null,
      lng: null,
      materials: '',
      products: '',
      landAllocated: '',
      currentLandUse: '',
      landUseChange: '',
      negativeImpacts: '',
      positiveImpacts: '',
      mitigation: '',
      additionalInfo: ''
    };

    this.selectedFiles = [];
    this.currentStep = 1;
    this.graphicsLayer.removeAll();
    this.selectedGraphic = null;

    if (this.sketchVM) {
      this.sketchVM.cancel();
    }
  }

  getCurrentDate(): string {
    return new Date().toLocaleString();
  }

  async generatePreviewPDF(): Promise<void> {
    const element = document.getElementById('pdfPreview');
    if (!element) {
      alert('Preview element not found');
      return;
    }

    // Populate preview content
    element.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>EIA Application Preview</h2>
        <hr>
        <h3>Applicant Information</h3>
        <p><strong>Name:</strong> ${this.formData.applicant}</p>
        <p><strong>Contact:</strong> ${this.formData.contact}</p>
        <p><strong>Email:</strong> ${this.formData.email}</p>
        <p><strong>Project:</strong> ${this.formData.projectName}</p>
        <h3>Project Details</h3>
        <p><strong>Description:</strong> ${this.data.projectDescription}</p>
        <p><strong>Size:</strong> ${this.data.projectSize}</p>
        <p><strong>Location:</strong> ${this.data.location}</p>
        <hr>
        <p><strong>Generated:</strong> ${this.getCurrentDate()}</p>
      </div>
    `;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`EIA-${this.formData.projectName || 'Application'}.pdf`);
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF preview');
    }
  }
}
