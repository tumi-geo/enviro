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

// Dynamic imports to prevent loading issues
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { PermitService } from '../../../services/permit';

@Component({
  selector: 'app-permits',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './permits.html',
  styleUrls: ['./permits.css']
})
export class PermitsComponent implements AfterViewInit, OnInit {
  getCurrentDate(): string {
  return new Date().toLocaleString();
}

  @ViewChild('mapViewNode', { static: false })
  mapEl!: ElementRef<HTMLDivElement>;

  view: MapView | null = null;
  graphicsLayer = new GraphicsLayer();
  sketchVM: SketchViewModel | null = null;
  selectedGraphic: Graphic | null = null;
  selectedGeometryType: 'point' | 'polygon' = 'point';
  isMapInitialized = false;
  isSubmitting = false;
  mapLoadError = false;

  selectedFiles: File[] = [];

  formData = {
    applicant: '',
    contact: '',
    email: '',
    projectName: '',
    category: '',
    description: '',
    location: '',
    lat: null as number | null,
    lng: null as number | null,
    status: 'Pending'
  };

  constructor(private permitService: PermitService) {}

  ngOnInit() {
    console.log('Permits Component Initialized');
  }

  ngAfterViewInit(): void {
    // Delay map initialization to ensure DOM is ready
    setTimeout(() => {
      this.initializeMap();
    }, 500);
  }

  private initializeMap(): void {
    try {
      if (!this.mapEl?.nativeElement) {
        console.error('Map container not found');
        this.mapLoadError = true;
        return;
      }

      const map = new Map({
        basemap: "streets-vector",
        layers: [this.graphicsLayer]
      });

      this.view = new MapView({
        container: this.mapEl.nativeElement,
        map: map,
        center: [25.91, -24.65],
        zoom: 12
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
        defaultCreateOptions: {
          mode: "click"
        }
      });

      this.sketchVM.on("create", (event) => {
        if (event.state === "complete") {
          this.selectedGraphic = event.graphic;
          const geom: any = event.graphic.geometry;

          if (geom.type === "point") {
            this.formData.lat = geom.latitude;
            this.formData.lng = geom.longitude;
            this.formData.location = `Lat: ${geom.latitude.toFixed(6)}, Lng: ${geom.longitude.toFixed(6)}`;
          } else if (geom.type === "polygon") {
            const centroid = geom.centroid;
            this.formData.lat = centroid.latitude;
            this.formData.lng = centroid.longitude;
            this.formData.location = `Polygon area selected (Centroid: ${centroid.latitude.toFixed(6)}, ${centroid.longitude.toFixed(6)})`;
          }
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

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.selectedFiles = Array.from(input.files);
  }

  private generatePermitRef(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `ENV-PERMIT-${year}-${random}`;
  }

  submitForm(): void {
    if (!this.formData.applicant || !this.formData.applicant.trim()) {
      alert('Please enter applicant name');
      return;
    }

    if (!this.formData.contact || !this.formData.contact.trim()) {
      alert('Please enter contact number');
      return;
    }

    if (!this.formData.email || !this.formData.email.trim()) {
      alert('Please enter email address');
      return;
    }

    if (!this.formData.projectName || !this.formData.projectName.trim()) {
      alert('Please enter project name');
      return;
    }

    if (!this.formData.category || !this.formData.category.trim()) {
      alert('Please select activity type');
      return;
    }

    if (this.formData.lat == null || this.formData.lng == null) {
      alert('Please select a location on the map');
      return;
    }

    this.isSubmitting = true;
    const permitRef = this.generatePermitRef();

    const payload = new FormData();
    payload.append('applicant', this.formData.applicant);
    payload.append('contact', this.formData.contact);
    payload.append('email', this.formData.email);
    payload.append('projectName', this.formData.projectName);
    payload.append('category', this.formData.category);
    payload.append('description', this.formData.description);
    payload.append('location', this.formData.location);
    payload.append('lat', String(this.formData.lat));
    payload.append('lng', String(this.formData.lng));
    payload.append('status', this.formData.status);
    payload.append('permitRef', permitRef);

    this.selectedFiles.forEach(file => {
      payload.append('documents', file);
    });

    this.permitService.createPermit(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        alert(`Permit submitted successfully!\nReference: ${permitRef}`);
        this.resetForm();
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
      category: '',
      description: '',
      location: '',
      lat: null,
      lng: null,
      status: 'Pending'
    };
    this.selectedFiles = [];
    this.graphicsLayer.removeAll();
    this.selectedGraphic = null;
    if (this.sketchVM) {
      this.sketchVM.cancel();
    }
  }

  async generatePreviewPDF(): Promise<void> {
    const element = document.getElementById('pdfPreview');
    if (!element) {
      alert('Preview element not found');
      return;
    }

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
      pdf.save('permit-preview.pdf');
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF');
    }
  }
}
