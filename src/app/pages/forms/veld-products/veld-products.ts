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
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-veld-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veld-products.html',
  styleUrls: ['./veld-products.css']
})
export class VeldProductsComponent {

  @Output() formChange = new EventEmitter<any>();

  currentStep = 1;

  constructor(private mapService: MapService) {}

  // ======================
  // STEP 1
  // ======================
  applicant = {
    name: '',
    id: '',
    phone: '',
    email: '',
    postalAddress: '',
    nationality: ''
  };

  purposes: string[] = []; // Harvest / Deal / Export

  duration = {
    start: '',
    end: ''
  };
  formatDate(date: string): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

  // ======================
  // STEP 2
  // ======================
  products = [
    { scientific: '', common: '', quantity: '' }
  ];

  location = {
    address: '',
    district: '',
    lat: null as number | null,
    lng: null as number | null
  };

  // ======================
  // STEP 3
  // ======================
  files: File[] = [];

  // ======================
  // MAP
  // ======================
  @ViewChild('mapEl') mapEl!: ElementRef;

  initMap() {
    const view = this.mapService.createMap(this.mapEl.nativeElement, 'WASTE');

    this.mapService.createSketch(view, (res) => {
      this.location.lat = res.lat;
      this.location.lng = res.lng;
      this.location.address = res.displayText;
      this.emit();
    });
  }

  // ======================
  // NAVIGATION
  // ======================
  next() {
    this.currentStep++;

    if (this.currentStep === 2) {
      setTimeout(() => this.initMap(), 200);
    }

    this.emit();
  }

  back() {
    this.currentStep--;
  }

  emit() {
    this.formChange.emit({
      applicant: this.applicant,
      purposes: this.purposes,
      duration: this.duration,
      products: this.products,
      location: this.location
    });
  }

  // ======================
  // TABLE
  // ======================
  addProduct() {
    this.products.push({ scientific: '', common: '', quantity: '' });
  }

  removeProduct(i: number) {
    this.products.splice(i, 1);
  }

  // ======================
  // PURPOSE TOGGLE
  // ======================
  togglePurpose(type: string) {
    if (this.purposes.includes(type)) {
      this.purposes = this.purposes.filter(t => t !== type);
    } else {
      this.purposes.push(type);
    }
    this.emit();
  }

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

    if (!this.applicant.name || !this.applicant.id) {
      alert('Please complete applicant details');
      return;
    }

    if (!this.location.lat || !this.location.lng) {
      alert('Please select location on map');
      return;
    }

    const payload = {
      applicant: this.applicant,
      purposes: this.purposes,
      duration: this.duration,
      products: this.products,
      location: this.location,
      files: this.files
    };

    console.log('Submitting:', payload);

    alert('Application submitted successfully');
  }
}
