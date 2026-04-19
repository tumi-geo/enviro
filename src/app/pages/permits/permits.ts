import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { PermitService } from '../../../services/permit';
import { EiaFormComponent } from "../forms/eia/eia";
import { TourismComponent } from "../forms/tourism/tourism";
import { VeldProductsComponent } from "../forms/veld-products/veld-products";
import { chemicalsComponent } from './../forms/chemicals/chemicals';
import { WasteManagementComponent } from "../forms/waste-management/waste-management";

@Component({
  selector: 'app-permits',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,
    EiaFormComponent,
    chemicalsComponent,
    TourismComponent,
    VeldProductsComponent,
    WasteManagementComponent],
  templateUrl: './permits.html',
  styleUrls: ['./permits.css']
})
export class PermitsComponent implements OnInit {

  selectedApplicationType: string = '';

  childFormData: any = {}; // 🔑 holds EIA / Facility / etc.

  isSubmitting = false;
  selectedFiles: File[] = [];

  formData = {
    applicant: '',
    contact: '',
    email: '',
    projectName: '',
    description: '',
    status: 'Pending'
  };

  constructor(private permitService: PermitService) {}

  ngOnInit(): void {}

  getCurrentDate(): string {
    return new Date().toLocaleString();
  }

  // ✅ RECEIVE CHILD DATA
  onChildFormChange(data: any) {
    this.childFormData = data;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.selectedFiles = Array.from(input.files);
  }

  private generatePermitRef(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `ENV-${year}-${random}`;
  }

  // ✅ SUBMIT (MERGED PAYLOAD)
  submitForm(): void {

    if (!this.selectedApplicationType) {
      alert('Select application type');
      return;
    }

    if (!this.childFormData?.location) {
      alert('Complete department form (map required)');
      return;
    }

    this.isSubmitting = true;

    const permitRef = this.generatePermitRef();

    const payload = new FormData();

    // core
    payload.append('permitRef', permitRef);
    payload.append('type', this.selectedApplicationType);

    Object.entries(this.formData).forEach(([k, v]) => {
      payload.append(k, String(v));
    });

    // child (important)
    payload.append('departmentData', JSON.stringify(this.childFormData));

    // files
    this.selectedFiles.forEach(f => payload.append('documents', f));

    this.permitService.createPermit(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        alert(`Submitted: ${permitRef}`);
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.isSubmitting = false;
      }
    });
  }

  private resetForm(): void {
    this.formData = {
      applicant: '',
      contact: '',
      email: '',
      projectName: '',
      description: '',
      status: 'Pending'
    };

    this.childFormData = {};
    this.selectedApplicationType = '';
    this.selectedFiles = [];
  }

  // ✅ PDF
  async generatePreviewPDF(): Promise<void> {

    const element = document.getElementById('pdfPreview');
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });

    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, imgWidth, imgHeight);

    pdf.save('permit-preview.pdf');
  }
}
