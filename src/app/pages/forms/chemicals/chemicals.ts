// chemicals.component.ts
import {
  Component,
  EventEmitter,
  Output,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapService } from '../../../../services/map';

@Component({
  selector: 'app-chemicals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chemicals.html',
  styleUrls: ['./chemicals.css']
})
export class chemicalsComponent implements AfterViewInit {

  @Output() formChange = new EventEmitter<any>();
  @ViewChildren('recipientMap') recipientMaps!: QueryList<ElementRef>;

  currentStep = 1;

  // ======================
  // STEP 1
  // ======================
  personal = {
    idNumber: '',
    designation: '',
    occupation: '',
    phone: '',
    email: ''
  };

  business = {
    name: '',
    contactPerson: '',  // ✅ ADDED
    postalAddress: '',
    activity: '',
    otherActivity: '',
    confidential: false
  };

  otherApplicationType: string = '';

  // ======================
  // STEP 2
  // ======================
  applicationTypes: string[] = [];

  controlPeriod = {
    start: '',
    end: ''
  };

  recipients: Array<{
    name: string;
    contactPerson: string;  // ✅ ADDED
    address: string;
    lat: number | null;
    lng: number | null;
  }> = [
    {
      name: '',
      contactPerson: '',
      address: '',
      lat: null,
      lng: null
    }
  ];

  // ======================
  // STEP 3
  // ======================
  substances = [
    {
      name: '',
      origin: '',
      quantity: '',
      odp: ''
    }
  ];

  selectedFiles: File[] = [];

  constructor(private mapService: MapService) {}

  ngAfterViewInit() {
    // Initial setup if needed
  }

  // ======================
  // NAVIGATION
  // ======================
  next() {
    this.currentStep++;

    if (this.currentStep === 2) {
      setTimeout(() => this.initRecipientMaps(), 300);
    }

    this.emit();
  }

  back() {
    this.currentStep--;
  }

  emit() {
    this.formChange.emit({
      personal: this.personal,
      business: this.business,
      applicationTypes: this.applicationTypes,
      otherApplicationType: this.otherApplicationType,
      controlPeriod: this.controlPeriod,
      recipients: this.recipients,
      substances: this.substances
    });
  }

  onActivityChange(value: string) {
    this.business.activity = value;

    if (value !== 'Other') {
      this.business.otherActivity = '';
    }

    this.emit();
  }

  // ======================
  // RECIPIENT MAPS
  // ======================
  addRecipient() {
    this.recipients.push({
      name: '',
      contactPerson: '',
      address: '',
      lat: null,
      lng: null
    });

    setTimeout(() => this.initRecipientMaps(), 200);
    this.emit();
  }

  removeRecipient(i: number) {
    this.recipients.splice(i, 1);
    this.emit();
  }

  initRecipientMaps() {
    if (!this.recipientMaps) return;

    this.recipientMaps.forEach((mapEl, index) => {
      const element = mapEl.nativeElement;

      // Skip if already initialized
      if (element._mapInitialized) return;

      // Skip if element has no dimensions
      if (element.offsetWidth === 0 || element.offsetHeight === 0) return;

      try {
        const view = this.mapService.createMap(element, 'WASTE');

        this.mapService.createSketch(view, (res) => {
          if (this.recipients[index]) {
            this.recipients[index].lat = res.lat;
            this.recipients[index].lng = res.lng;
            this.recipients[index].address = res.displayText;
            this.emit();
          }
        });

        element._mapInitialized = true;
      } catch (error) {
        console.error(`Failed to initialize map for recipient ${index}:`, error);
      }
    });
  }

  // ======================
  // DYNAMIC TABLES
  // ======================
  addSubstance() {
    this.substances.push({ name: '', origin: '', quantity: '', odp: '' });
    this.emit();
  }

  removeSubstance(i: number) {
    this.substances.splice(i, 1);
    this.emit();
  }

  // ======================
  // FILES
  // ======================
  onFile(e: any) {
    this.selectedFiles = Array.from(e.target.files);
  }

  toggleApplication(type: string) {
    if (this.applicationTypes.includes(type)) {
      this.applicationTypes = this.applicationTypes.filter(t => t !== type);
    } else {
      this.applicationTypes.push(type);
    }
    this.emit();
  }

  // ======================
  // SUBMIT
  // ======================
  submitApplication() {
    // Basic validation
    if (!this.personal.idNumber || !this.business.name) {
      alert('Please complete required fields');
      return;
    }

    // Check if all recipients have locations
    const missingLocations = this.recipients.some(r => r.lat === null || r.lng === null);
    if (missingLocations) {
      alert('Please select locations for all recipients on the map');
      return;
    }

    const payload = {
      personal: this.personal,
      business: this.business,
      applicationTypes: this.applicationTypes,
      otherApplicationType: this.otherApplicationType,
      controlPeriod: this.controlPeriod,
      recipients: this.recipients,
      substances: this.substances,
      files: this.selectedFiles
    };

    console.log('Submitting:', payload);
    alert('Application submitted successfully');
  }
}
