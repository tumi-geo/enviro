import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

@Component({
  selector: 'app-violations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './violations.html',
  styleUrls: ['./violations.css']
})
export class ViolationsComponent implements AfterViewInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;
  @ViewChild('pieChart') pieChartRef!: ElementRef;
  @ViewChild('barChart') barChartRef!: ElementRef;

  violations = [
    {
      type: 'Construction',
      location: 'Gaborone',
      image: 'assets/img/scalf.jpg',
      whatsapp: '+26771234567',
      officer: 'Inspector Kabelo',
      status: 'Pending'
    },
    {
      type: 'Construction site safety',
      location: 'Francistown',
      image: 'assets/img/scafl.jpg',
      whatsapp: '+26772345678',
      officer: 'Inspector Kemong',
      status: 'Resolved'
    },
    {
      type: 'Shopping Mall Safety',
      location: 'Gaborone',
      image: 'assets/img/sample3.jpg',
      whatsapp: '+26773456789',
      officer: 'Inspector Thabo',
      status: 'Pending'
    },
    {
      type: 'Hotel Safety',
      location: 'Gaborone',
      image: 'assets/img/enviro.jpg',
      whatsapp: '+26773456789',
      officer: 'Inspector Thabo',
      status: 'Pending'
    },
    {
      type: 'Site Safety',
      location: 'Mogoditshane',
      image: 'assets/img/naledi.jpg',
      whatsapp: '73548965',
      officer: 'Inspector Thabo',
      status: 'Fined'
    },
    {
      type: 'Workshop Safety',
      location: 'Gaborone',
      image: 'assets/img/gsbsk.jpg',
      whatsapp: '78542536',
      officer: 'Inspector Letang',
      status: 'Resolved'
    },
    {
      type: 'Food Safety',
      location: 'Lobatse',
      image: 'assets/img/fours.jpg',
      whatsapp: '77589632',
      officer: 'Inspector Thabo',
      status: 'Suspended'
    }
  ];
pieChart!: Chart;
barChart!: Chart;

filteredViolations: any[] = [];

selectedDistrict: string = 'All';
selectedStatus: string = 'All';

districts: string[] = [];
statuses: string[] = [];

applyFilters() {

  this.filteredViolations = this.violations.filter(v => {

    const matchDistrict =
      this.selectedDistrict === 'All' ||
      v.location === this.selectedDistrict;

    const matchStatus =
      this.selectedStatus === 'All' ||
      v.status === this.selectedStatus;

    return matchDistrict && matchStatus;
  });

  this.buildCharts(this.filteredViolations);
}

  ngAfterViewInit(): void {
    this.initMap();
    this.initCharts();
  }

  // 🗺️ MAP
  initMap() {
    const map = new Map({
      basemap: "topo-vector"
    });

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

    const districtLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1_view/FeatureServer"
    });

    map.add(districtLayer);
  }

  // 📊 CHARTS
 initCharts() {
  this.filteredViolations = [...this.violations];

  // Extract filter values
  const districtSet = new Set<string>();
  const statusSet = new Set<string>();

  this.violations.forEach(v => {
    districtSet.add(v.location);
    statusSet.add(v.status);
  });

  this.districts = Array.from(districtSet);
  this.statuses = Array.from(statusSet);

  // Build charts first time
  this.buildCharts(this.filteredViolations);
}

 buildCharts(data: any[]) {

  const statusCounts: any = {};
  const typeCounts: any = {};

  data.forEach(v => {
    statusCounts[v.status] = (statusCounts[v.status] || 0) + 1;
    typeCounts[v.type] = (typeCounts[v.type] || 0) + 1;
  });

  // Destroy old charts
  if (this.pieChart) this.pieChart.destroy();
  if (this.barChart) this.barChart.destroy();

  // PIE
  this.pieChart = new Chart(this.pieChartRef.nativeElement, {
    type: 'pie',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#ffc107', '#28a745', '#dc3545', '#0dcaf0']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  // BAR
  this.barChart = new Chart(this.barChartRef.nativeElement, {
    type: 'bar',
    data: {
      labels: Object.keys(typeCounts),
      datasets: [{
        label: 'Violations',
        data: Object.values(typeCounts),
        backgroundColor: '#198754'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  }}
