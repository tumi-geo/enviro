import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-customer-details',
  templateUrl: './customer-details.html',
  styleUrls: ['./customer-details.css'],
  imports: [FormsModule, CommonModule]
})
export class CustomerDetailsComponent {

  quotationNumber = '';
  quoteExists: boolean | null = null;
  canEnterDetails = false;
  quoteStatus: string | null = null;

  // Form Fields
  customerName = '';
  surname = '';
  cellphone = '';
  email = '';
  customerType = '';

  existingQuotes = ['1234', '4555', '9922'];

  quoteStatusDB: any = {
    '1234': 'Quotation with Customer Care agent',
    '4555': 'Quotation with Field Officer for site visit',
    '9922': 'Order completed'
  };

  searchQuote() {
    // 1. Reset state on new search
    this.canEnterDetails = false;
    this.quoteStatus = null;
    this.quoteExists = null;

    if (!this.quotationNumber.trim()) {
      alert("Please enter a quotation number.");
      return;
    }

    // 2. Check DB
    this.quoteExists = this.existingQuotes.includes(this.quotationNumber);

    if (this.quoteExists) {
      this.quoteStatus = this.quoteStatusDB[this.quotationNumber];
      this.canEnterDetails = false;
    } else {
      this.quoteStatus = null;
      this.canEnterDetails = false;
    }
  }

  allowCreate() {
    this.canEnterDetails = true;
    this.quoteExists = true; // Trick the UI to hide the error message
    this.quoteStatus = "New quotation being created";
  }

  save() {
    alert('Customer Details Saved Successfully!');
  }
}
