import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapService } from '../../../../services/map';

@Component({
  selector: 'app-waste-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './waste-management.html',
  styleUrls: ['./waste-management.css']
})
export class WasteManagementComponent {

  @Output() formChange = new EventEmitter<any>();

  currentStep = 1;

  // ✅ STEP 1
  formData = {
    permitType: '',
    applicationType: '',
    date: '',
    companyName: '',
    wasteType: '',
    contactPerson: '',
    phone: '',
    fax: '',
    email: '',
    address: '',
    status: ''
  };

  // ✅ STEP 2
  data = {
    receiptNumber: '',
    plot: '',
    ward: '',
    city: '',

    location: '',
    lat: null as number | null,
    lng: null as number | null,

    vehicles: [
      { type: '', reg: '', weight: '', waste: '', quantity: '', cover: '' }
    ],

    personnel: [
      { name: '', position: '', qualification: '', training: '' }
    ],

    protective: {
      overalls: 0,
      boots: 0,
      gloves: 0,
      masks: 0,
      fireExt: 0
    }
  };

  // ✅ STEP 3
  attachments = {
    vehicleCert: false,
    roadworthy: false,
    incorporation: false,
    training: false,
    payment: false
  };

  selectedFiles: File[] = [];

  constructor(private mapService: MapService) {}

  // ======================
  // STEP NAVIGATION
  // ======================
  next() {
    this.currentStep++;

    if (this.currentStep === 2) {
      setTimeout(() => this.initMap(), 100);
    }

    this.emit();
  }

  back() {
    this.currentStep--;
  }

  emit() {
    this.formChange.emit({
      ...this.formData,
      ...this.data,
      attachments: this.attachments,
      applicationType: 'WASTE'
    });
  }

  // ======================
  // MAP
  // ======================
  @ViewChild('mapEl') mapEl!: ElementRef;

  initMap() {
    const view = this.mapService.createMap(this.mapEl.nativeElement, 'WASTE');

    this.mapService.createSketch(view, (res) => {
      this.data.lat = res.lat;
      this.data.lng = res.lng;
      this.data.location = res.displayText;
      this.emit();
    });
  }

  // ======================
  // DYNAMIC TABLES
  // ======================
  addVehicle() {
    this.data.vehicles.push({
      type: '', reg: '', weight: '', waste: '', quantity: '', cover: ''
    });
  }

  removeVehicle(i: number) {
    this.data.vehicles.splice(i, 1);
  }

  addPersonnel() {
    this.data.personnel.push({
      name: '', position: '', qualification: '', training: ''
    });
  }

  removePersonnel(i: number) {
    this.data.personnel.splice(i, 1);
  }

  // ======================
  // FILES
  // ======================
  onFile(e: any) {
    this.selectedFiles = Array.from(e.target.files);
  }

submitApplication() {
  if (!this.formData.companyName) {
    alert('Please enter company name');
    return;
  }
  if (!this.formData.permitType) {
    alert('Please select permit type');
    return;
  }
  if (!this.data.lat || !this.data.lng) {
    alert('Please select location on map');
    return;
  }

  this.emit();
  console.log('Submitting waste management application:', {
    ...this.formData,
    ...this.data,
    attachments: this.attachments,
    files: this.selectedFiles
  });

  alert('Application submitted successfully!');
}
}
