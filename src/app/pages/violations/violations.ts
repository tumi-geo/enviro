import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-violations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './violations.html',
  styleUrls: ['./violations.css']
})
export class ViolationsComponent implements AfterViewInit, OnInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;
  @ViewChild('pieChart') pieChartRef!: ElementRef;
  @ViewChild('barChart') barChartRef!: ElementRef;

  view!: MapView;
  graphicsLayer = new GraphicsLayer();
  selectedViolation: any = null;

  violations = [
    {
      id: 1,
      type: 'Construction',
      location: 'Gaborone',
      lat: -24.6282,
      lng: 25.9231,
      image: 'assets/img/scalf.jpg',
      whatsapp: '+26771234567',
      officer: 'Inspector Kabelo',
      status: 'Pending',
      notes: [
        { date: '2024-03-15', author: 'Inspector Kabelo', note: 'Site inspection conducted. Found unsafe scaffolding practices. Workers not wearing safety gear.' },
        { date: '2024-03-16', author: 'Field Reporter John', note: 'Observed continued violations despite warning. No safety harnesses in use.' },
        { date: '2024-03-18', author: 'Inspector Kabelo', note: 'Stop work order issued. Company requested 14 days to comply.' }
      ]
    },
    {
      id: 2,
      type: 'Construction site safety',
      location: 'Francistown',
      lat: -21.1700,
      lng: 27.5000,
      image: 'assets/img/scafl.jpg',
      whatsapp: '+26772345678',
      officer: 'Inspector Kemong',
      status: 'Resolved',
      notes: [
        { date: '2024-02-10', author: 'Inspector Kemong', note: 'Initial inspection revealed inadequate safety barriers.' },
        { date: '2024-02-20', author: 'Field Reporter Sarah', note: 'Site has implemented all safety measures. Barriers installed.' },
        { date: '2024-02-25', author: 'Inspector Kemong', note: 'Violation resolved. Site compliant with safety standards.' }
      ]
    },
    {
      id: 3,
      type: 'Shopping Mall Safety',
      location: 'Gaborone',
      lat: -24.6582,
      lng: 25.9086,
      image: 'assets/img/sample3.jpg',
      whatsapp: '+26773456789',
      officer: 'Inspector Thabo',
      status: 'Pending',
      notes: [
        { date: '2024-03-20', author: 'Field Reporter Mike', note: 'Blocked fire exits in food court area.' },
        { date: '2024-03-21', author: 'Inspector Thabo', note: 'Management notified. Given 7 days to clear exits.' }
      ]
    },
    {
      id: 4,
      type: 'Hotel Safety',
      location: 'Gaborone',
      lat: -24.6400,
      lng: 25.9200,
      image: 'assets/img/enviro.jpg',
      whatsapp: '+26773456789',
      officer: 'Inspector Thabo',
      status: 'Pending',
      notes: [
        { date: '2024-03-22', author: 'Field Reporter Alice', note: 'Kitchen hygiene issues observed. Pest infestation reported.' },
        { date: '2024-03-23', author: 'Inspector Thabo', note: 'Health violation notice issued. Follow-up inspection scheduled.' }
      ]
    },
    {
      id: 5,
      type: 'Site Safety',
      location: 'Mogoditshane',
      lat: -24.6269,
      lng: 25.8659,
      image: 'assets/img/naledi.jpg',
      whatsapp: '73548965',
      officer: 'Inspector Thabo',
      status: 'Fined',
      notes: [
        { date: '2024-03-10', author: 'Inspector Thabo', note: 'No environmental impact assessment conducted.' },
        { date: '2024-03-12', author: 'Field Reporter David', note: 'Company operating without permit. Water pollution observed.' },
        { date: '2024-03-15', author: 'Inspector Thabo', note: 'Fine of P50,000 issued. Company to submit compliance plan.' }
      ]
    },
    {
      id: 6,
      type: 'Workshop Safety',
      location: 'Gaborone',
      lat: -24.6150,
      lng: 25.9350,
      image: 'assets/img/gsbsk.jpg',
      whatsapp: '78542536',
      officer: 'Inspector Letang',
      status: 'Resolved',
      notes: [
        { date: '2024-02-05', author: 'Inspector Letang', note: 'Hazardous waste improperly stored.' },
        { date: '2024-02-15', author: 'Field Reporter Grace', note: 'New storage containers installed.' },
        { date: '2024-02-20', author: 'Inspector Letang', note: 'Compliant. Case closed.' }
      ]
    },
    {
      id: 7,
      type: 'Food Safety',
      location: 'Lobatse',
      lat: -25.2000,
      lng: 25.6667,
      image: 'assets/img/fours.jpg',
      whatsapp: '77589632',
      officer: 'Inspector Thabo',
      status: 'Suspended',
      notes: [
        { date: '2024-03-01', author: 'Field Reporter James', note: 'Food handling violations. Expired products on shelves.' },
        { date: '2024-03-03', author: 'Inspector Thabo', note: 'License suspended pending full inspection.' },
        { date: '2024-03-10', author: 'Inspector Thabo', note: 'Business closed until compliance is achieved.' }
      ]
    }
  ];

  filteredViolations: any[] = [];
  selectedDistrict: string = 'All';
  selectedStatus: string = 'All';
  districts: string[] = [];
  statuses: string[] = [];
  searchText: string = '';
  selectedNotesViolation: any = null;
  showNotesPanel: boolean = false;

  pieChart!: Chart;
  barChart!: Chart;

  constructor() { }

  ngOnInit(): void {
    this.filteredViolations = [...this.violations];
    this.extractFilterOptions();
  }

  extractFilterOptions() {
    const districtSet = new Set<string>();
    const statusSet = new Set<string>();

    this.violations.forEach(v => {
      districtSet.add(v.location);
      statusSet.add(v.status);
    });

    this.districts = Array.from(districtSet).sort();
    this.statuses = Array.from(statusSet).sort();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
      this.initCharts();
    }, 100);
  }

  initMap() {
    const map = new Map({
      basemap: "topo-vector",
      layers: [this.graphicsLayer]
    });

    this.view = new MapView({
      container: this.mapEl.nativeElement,
      map: map,
      center: [25.91, -24.65],
      zoom: 7
    });

    // Add violation points to map
    this.view.when(() => {
      this.plotViolationsOnMap();
      this.setupMapClickHandler();
    });

    // Optional: Add district layer
    try {
      const districtLayer = new FeatureLayer({
        url: "https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1_view/FeatureServer"
      });
      map.add(districtLayer);
    } catch (error) {
      console.log('District layer not available');
    }
  }

  plotViolationsOnMap() {
    if (!this.graphicsLayer) return;
    this.graphicsLayer.removeAll();

    const graphics = this.filteredViolations.map(v => {
      let color = '#ffc107';
      switch (v.status) {
        case 'Resolved': color = '#28a745'; break;
        case 'Pending': color = '#ffc107'; break;
        case 'Fined': color = '#dc3545'; break;
        case 'Suspended': color = '#0dcaf0'; break;
        default: color = '#6c757d';
      }

      return new Graphic({
        geometry: {
          type: "point",
          longitude: v.lng,
          latitude: v.lat
        },
        symbol: {
          type: "simple-marker",
          color: color,
          size: 12,
          outline: { color: "white", width: 2 }
        },
        attributes: { id: v.id, ...v },
        popupTemplate: {
          title: "{type}",
          content: `
            <strong>Location:</strong> {location}<br/>
            <strong>Status:</strong> {status}<br/>
            <strong>Officer:</strong> {officer}<br/>
            <strong>Contact:</strong> {whatsapp}
          `
        }
      });
    });

    this.graphicsLayer.addMany(graphics);
  }

  setupMapClickHandler() {
    this.view.on("click", (event) => {
      this.view.hitTest(event).then((response) => {
        const graphicHit = response.results.find(
          (r: any) => r.type === "graphic"
        );

        if (!graphicHit) return;

        const graphic = (graphicHit as any).graphic;

        if (graphic && graphic.graphic.attributes) {
          const violationId = graphic.graphic.attributes.id;
          const violation = this.violations.find(v => v.id === violationId);
          if (violation) {
            this.selectViolation(violation);
            this.zoomToViolation(violation);
          }
        } else {
          // Clear selection when clicking on empty map area
          this.selectedViolation = null;
          this.selectedNotesViolation = null;
          this.showNotesPanel = false;
        }
      });
    });
  }

  selectViolation(violation: any) {
    this.selectedViolation = violation;
    this.selectedNotesViolation = violation;
    this.showNotesPanel = true;

    // Highlight the corresponding table row
    const rows = document.querySelectorAll('.violation-row');
    rows.forEach(row => row.classList.remove('selected'));
    const selectedRow = document.querySelector(`.violation-row[data-id="${violation.id}"]`);
    if (selectedRow) {
      selectedRow.classList.add('selected');
      selectedRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  zoomToViolation(violation: any) {
    this.view.goTo({
      center: [violation.lng, violation.lat],
      zoom: 14,
      speed: 500
    }).catch(error => console.error('Zoom error:', error));
  }

  applyFilters() {
    this.filteredViolations = this.violations.filter(v => {
      const matchDistrict = this.selectedDistrict === 'All' || v.location === this.selectedDistrict;
      const matchStatus = this.selectedStatus === 'All' || v.status === this.selectedStatus;
      const matchSearch = !this.searchText ||
        v.type.toLowerCase().includes(this.searchText.toLowerCase()) ||
        v.location.toLowerCase().includes(this.searchText.toLowerCase()) ||
        v.officer.toLowerCase().includes(this.searchText.toLowerCase()) ||
        v.status.toLowerCase().includes(this.searchText.toLowerCase());

      return matchDistrict && matchStatus && matchSearch;
    });

    this.plotViolationsOnMap();
    this.buildCharts(this.filteredViolations);

    // Clear selection when filters change
    this.selectedViolation = null;
    this.selectedNotesViolation = null;
    this.showNotesPanel = false;
  }

  clearFilters() {
    this.selectedDistrict = 'All';
    this.selectedStatus = 'All';
    this.searchText = '';
    this.applyFilters();
  }

  initCharts() {
    this.buildCharts(this.filteredViolations);
  }

  buildCharts(data: any[]) {
    const statusCounts: any = {};
    const typeCounts: any = {};

    data.forEach(v => {
      statusCounts[v.status] = (statusCounts[v.status] || 0) + 1;
      typeCounts[v.type] = (typeCounts[v.type] || 0) + 1;
    });

    if (this.pieChart) this.pieChart.destroy();
    if (this.barChart) this.barChart.destroy();

    this.pieChart = new Chart(this.pieChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: Object.keys(statusCounts),
        datasets: [{
          data: Object.values(statusCounts),
          backgroundColor: ['#ffc107', '#28a745', '#dc3545', '#0dcaf0', '#6c757d']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    this.barChart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: Object.keys(typeCounts),
        datasets: [{
          label: 'Number of Violations',
          data: Object.values(typeCounts),
          backgroundColor: '#198754'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true, title: { display: true, text: 'Count' } },
          x: { title: { display: true, text: 'Violation Type' } }
        }
      }
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending': return 'bg-warning';
      case 'Resolved': return 'bg-success';
      case 'Fined': return 'bg-danger';
      case 'Suspended': return 'bg-info';
      default: return 'bg-secondary';
    }
  }

async downloadPDF() {

  if (!this.selectedViolation || !this.view) {
    alert('Select a violation first');
    return;
  }

  try {
    // 🗺️ Take map screenshot
    const screenshot = await this.view.takeScreenshot({
      width: 800,
      height: 400
    });

    const mapImg = document.getElementById('mapSnapshot') as HTMLImageElement;
    if (mapImg) {
      mapImg.src = screenshot.dataUrl;
    }

    // ⏳ Wait for DOM update
    await new Promise(resolve => setTimeout(resolve, 500));

    const element = document.getElementById('pdfReport');
    if (!element) {
      alert('PDF element missing');
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

    pdf.save(`violation-${this.selectedViolation.type}.pdf`);

  } catch (err) {
    console.error('PDF error:', err);
    alert('Failed to generate PDF');
  }
}
}
