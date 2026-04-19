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
  selector: 'app-tourism',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tourism.html',
  styleUrls: ['./tourism.css']
})
export class TourismComponent {

  @Output() formChange = new EventEmitter<any>();

  currentStep = 1;

  constructor(private mapService: MapService) {}

  // ======================
  // STEP 1
  // ======================
  company = {
    name: '',
    tradingName: '',
    postalAddress: '',
    physicalAddress: '',
    lat: null as number | null,
    lng: null as number | null,
    phone: '',
    fax: '',
    email: ''
  };

  // ======================
  // STEP 2
  // ======================
  secretaries = [
    { name: '', contact: '' }
  ];

  registration = {
    certificateNo: '',
    date: '',
    principalBusiness: '',
    criminalRecord: false,
    criminalDetails: '',
    registeredElsewhere: false,
    registrationDetails: ''
  };

  shareholders = [
    { name: '', nationality: '', shares: '' }
  ];

  directors = [
    { name: '', address: '', nationality: '' }
  ];

  // ======================
  // STEP 3
  // ======================
  labour = {
    trainingSubmitted: false,
    reason: ''
  };

  employment = {
    citizenMales: '',
    citizenFemales: '',
    nonCitizenMales: '',
    nonCitizenFemales: ''
  };

  jobClassifications = [
    { category: 'Non Supervisory', employedC: '', employedNC: '', vacantC: '', vacantNC: '', total: '' },
    { category: 'Supervisory', employedC: '', employedNC: '', vacantC: '', vacantNC: '', total: '' },
    { category: 'Middle Management', employedC: '', employedNC: '', vacantC: '', vacantNC: '', total: '' },
    { category: 'Senior Management', employedC: '', employedNC: '', vacantC: '', vacantNC: '', total: '' }
  ];

  // ======================
  // STEP 4
  // ======================
  hasLicenses = false;

  licenses = [
    { number: '', category: '', expiry: '', name: '' }
  ];

  files: File[] = [];

  // ======================
  // MAP
  // ======================
  @ViewChild('mapEl') mapEl!: ElementRef;

  initMap() {
    const view = this.mapService.createMap(this.mapEl.nativeElement, 'WASTE');

    this.mapService.createSketch(view, (res) => {
      this.company.lat = res.lat;
      this.company.lng = res.lng;
      this.company.physicalAddress = res.displayText;
      this.emit();
    });
  }

  // ======================
  // NAVIGATION
  // ======================
  next() {
    this.currentStep++;

    if (this.currentStep === 1) {
      setTimeout(() => this.initMap(), 100);
    }

    this.emit();
  }

  back() {
    this.currentStep--;
  }

  emit() {
    this.formChange.emit({
      company: this.company,
      secretaries: this.secretaries,
      registration: this.registration,
      shareholders: this.shareholders,
      directors: this.directors,
      labour: this.labour,
      employment: this.employment,
      jobClassifications: this.jobClassifications,
      licenses: this.licenses
    });
  }

  // ======================
  // DYNAMIC TABLES
  // ======================
  addSecretary() { this.secretaries.push({ name: '', contact: '' }); }
  addShareholder() { this.shareholders.push({ name: '', nationality: '', shares: '' }); }
  addDirector() { this.directors.push({ name: '', address: '', nationality: '' }); }
  addLicense() { this.licenses.push({ number: '', category: '', expiry: '', name: '' }); }

  remove(arr: any[], i: number) { arr.splice(i, 1); }

  // ======================
  // FILES
  // ======================
  onFile(e: any) {
    this.files = Array.from(e.target.files);
  }

  // ======================
  // SUBMIT
  // ======================
  submit() {
    console.log('FINAL DATA:', {
      ...this.company,
      ...this.registration
    });

    alert('Application submitted successfully');
  }
}
