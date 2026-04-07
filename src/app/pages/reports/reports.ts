import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class ReportsComponent {

  reports = [
    {
      village: 'Gaborone',
      title: 'Construction Activity',
      description: 'Rapid urban construction projects require strict environmental compliance monitoring and land use control.'
    },
    {
      village: 'Francistown',
      title: 'Mining Activity',
      description: 'Mining operations demand continuous monitoring of land degradation and water contamination risks.'
    },
    {
      village: 'Maun',
      title: 'Tourism & Environmental Health',
      description: 'Tourism activities near sensitive ecosystems require environmental health assessments and protection strategies.'
    },
    {
      village: 'Serowe',
      title: 'Agriculture & Food Processing',
      description: 'Food processing and agricultural expansion must comply with waste management and water usage regulations.'
    },
    {
      village: 'Molepolole',
      title: 'Manufacturing',
      description: 'Industrial manufacturing requires emissions tracking and proper waste disposal systems.'
    },
    {
      village: 'Kasane',
      title: 'Environmental Protection',
      description: 'Proximity to wildlife reserves requires strict compliance with conservation regulations.'
    },
    {
      village: 'Palapye',
      title: 'Energy & Construction',
      description: 'Infrastructure and energy developments must align with environmental impact standards.'
    },
    {
      village: 'Kanye',
      title: 'Health Services',
      description: 'Healthcare facilities must manage hazardous waste and maintain environmental safety standards.'
    },
    {
      village: 'Mochudi',
      title: 'Chemical Processing',
      description: 'Chemical industries require strict monitoring of emissions and hazardous material handling.'
    },
    {
      village: 'Ramotswa',
      title: 'Mixed Development',
      description: 'Urban and rural development projects require integrated environmental compliance monitoring.'
    }
  ];

  downloadPDF(report: any) {

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('Environmental Compliance Report', 20, 20);

  doc.setFontSize(14);
  doc.text(`Village: ${report.village}`, 20, 40);
  doc.text(`Activity: ${report.title}`, 20, 50);

  doc.setFontSize(12);
  doc.text(report.description, 20, 70, { maxWidth: 170 });

  doc.save(`${report.village}-report.pdf`);
}
}
