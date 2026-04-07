import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-compliance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance.html',
  styleUrls: ['./compliance.css']
})
export class ComplianceComponent implements AfterViewInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;
  @ViewChild('pieChart') pieChartRef!: ElementRef;
  @ViewChild('barChart') barChartRef!: ElementRef;
  @ViewChild('lineChart') lineChartRef!: ElementRef;

  facilities = [
    { name: 'Gaborone Brick Works', location: 'Gaborone', lastInspection: '2025-12-10', complianceRate: 90, grade: 'Good' },
    { name: 'Francistown Gold Mine', location: 'Francistown', lastInspection: '2025-10-05', complianceRate: 65, grade: 'Below Average' },
    { name: 'Maun Food Plant', location: 'Maun', lastInspection: '2026-01-15', complianceRate: 80, grade: 'Average' },
    { name: 'Princess Marina Hospital', location: 'Gaborone', lastInspection: '2026-01-21', complianceRate: 95, grade: 'Good' },
    { name: 'SKIP Hire Waste Facility', location: 'Gaborone', lastInspection: '2026-01-15', complianceRate: 85, grade: 'Average' }
  ];

  ngAfterViewInit(): void {
    this.initMap();
    this.initCharts();
  }

  // 🗺️ MAP
  initMap() {
    const map = new Map({ basemap: 'topo-vector' });

    const view = new MapView({
      container: this.mapEl.nativeElement,
      map: map,
      center: [25.91, -24.65],
      zoom: 6
    });

    IdentityManager.registerToken({
      server: 'https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1_view/FeatureServer',
      token: 'ak-ossN4w2ftiKkFEPGdNOA..CXMmpB91p3C4h0LgFeQBmeG5-G96s7b2Hv01L1brCAMPHwzveq6V7z3cPvqvSeHmodFqFGPHrBXshUM7QQFuxvBmSKf2CKF5RFsLi0kpexScD36auwpZmCarIgTO2NpZW5JLYPezdIGsI5A.'
    });

    const facilityLayer = new FeatureLayer({
      url: 'https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1/FeatureServer/0',
      title: 'Facility Coverage'
    });

    map.add(facilityLayer);
  }

  // 📊 Charts
  initCharts() {
    // PIE CHART: Grades
    const gradeCounts: any = { 'Good': 0, 'Average': 0, 'Below Average': 0 };
    this.facilities.forEach(f => gradeCounts[f.grade]++);

    new Chart(this.pieChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: Object.keys(gradeCounts),
        datasets: [{
          data: Object.values(gradeCounts),
          backgroundColor: ['#28a745', '#ffc107', '#dc3545']
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    // BAR CHART: Compliance rate per facility
    new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.facilities.map(f => f.name),
        datasets: [{
          label: 'Compliance Rate (%)',
          data: this.facilities.map(f => f.complianceRate),
          backgroundColor: '#0d6efd'
        }]
      },
      options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }
    });

    // LINE CHART: Monthly inspections per sector
    new Chart(this.lineChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          { label: 'Manufacturing', data: [2,3,1,4,3,2,5,4,3,2,3,4], borderColor: '#198754', fill: false },
          { label: 'Food Processing', data: [1,2,3,2,1,2,3,2,1,2,3,2], borderColor: '#ffc107', fill: false },
          { label: 'Construction', data: [3,4,2,3,4,3,2,3,4,3,2,3], borderColor: '#0d6efd', fill: false },
          { label: 'Mining', data: [2,1,3,2,1,3,2,1,2,3,2,1], borderColor: '#dc3545', fill: false },
          { label: 'Shopping Facilities', data: [1,1,2,1,2,1,2,1,1,2,1,1], borderColor: '#6f42c1', fill: false }
        ]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }
}
