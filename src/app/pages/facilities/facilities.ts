import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './facilities.html',
  styleUrls: ['./facilities.css']
})
export class FacilitiesComponent implements AfterViewInit, OnInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;
  @ViewChild('facilityChart') facilityChartRef!: ElementRef;

  view!: MapView;
  graphicsLayer = new GraphicsLayer();
  selectedFacility: any = null;
  searchText: string = '';
  selectedStatus: string = 'All';
  statuses: string[] = ['All', 'Compliant', 'Non-Compliant', 'Pending'];

  totalFacilities: number = 0;
  compliantCount: number = 0;
  nonCompliantCount: number = 0;

  facilityChart!: Chart;

  facilities = [
    {
      id: 1,
      name: 'Palapye Waste Management Facility',
      owner: 'Water Utilities Corporation',
      location: 'Palapye',
      lat: -22.5500,
      lng: 27.1333,
      contact: '+267 71234567',
      email: 'info@wuc.co.bw',
      status: 'Compliant',
      lastInspection: '2025-10-10',
      complianceScore: 92,
      inspectionHistory: [
        { date: '2025-10-10', inspector: 'John Modise', findings: 'All systems operational. Waste segregation properly implemented.', status: 'Pass' },
        { date: '2025-07-15', inspector: 'Mary Kelebeng', findings: 'Minor issues with record keeping.', status: 'Warning' }
      ]
    },
    {
      id: 2,
      name: 'Francistown Clinical Waste Facility',
      owner: 'Skip Hire Botswana',
      location: 'Francistown',
      lat: -21.1700,
      lng: 27.5000,
      contact: '+267 77583695',
      email: 'info@skiphire.co.bw',
      status: 'Compliant',
      lastInspection: '2025-12-10',
      complianceScore: 88,
      inspectionHistory: [
        { date: '2025-12-10', inspector: 'Thabo Nkosi', findings: 'Clinical waste handling procedures compliant.', status: 'Pass' }
      ]
    },
    {
      id: 3,
      name: 'Gaborone Brick Works',
      owner: 'BuildTech Botswana',
      location: 'Gaborone',
      lat: -24.6282,
      lng: 25.9231,
      contact: '+267 71234567',
      email: 'info@buildtech.co.bw',
      status: 'Compliant',
      lastInspection: '2025-12-10',
      complianceScore: 85,
      inspectionHistory: [
        { date: '2025-12-10', inspector: 'Kabelo Masire', findings: 'Emissions within acceptable limits.', status: 'Pass' }
      ]
    },
    {
      id: 4,
      name: 'Francistown Gold Mine',
      owner: 'Botswana Mining Corp',
      location: 'Francistown',
      lat: -21.1800,
      lng: 27.5200,
      contact: '+267 72345678',
      email: 'contact@miningbw.co.bw',
      status: 'Non-Compliant',
      lastInspection: '2025-10-05',
      complianceScore: 45,
      inspectionHistory: [
        { date: '2025-10-05', inspector: 'Grace Mmoloki', findings: 'Water contamination detected. Waste disposal violations.', status: 'Fail' },
        { date: '2025-07-10', inspector: 'Grace Mmoloki', findings: 'Non-compliance notice issued.', status: 'Warning' }
      ]
    },
    {
      id: 5,
      name: 'Maun Food Processing Plant',
      owner: 'AgriFoods BW',
      location: 'Maun',
      lat: -19.9833,
      lng: 23.4167,
      contact: '+267 73456789',
      email: 'support@agrifoods.co.bw',
      status: 'Pending',
      lastInspection: '2026-01-15',
      complianceScore: 65,
      inspectionHistory: [
        { date: '2026-01-15', inspector: 'Pule Dikgang', findings: 'Initial inspection scheduled. Waiting for documentation.', status: 'Pending' }
      ]
    },
    { id: 6,
        name: 'Selebi-Phikwe Copper Mine',
        owner: 'Botswana Mining Corp',
        location: 'Selebi-Phikwe',
        lat: -21.95,
        lng: 27.85,
        contact: '+267 72345678',
        email: 'info@bcl.co.bw',
        status: 'Pending',
        lastInspection: '2025-11-01',
        complianceScore: 70,
        inspectionHistory: []
      },
      { id: 7,
        name: 'Lobatse Brick Factory',
        owner: 'Lobatse Clay Works',
        location: 'Lobatse',
        lat: -22.75,
        lng: 25.15,
        contact: '+267 71234567',
        email: 'info@lobatseclay.co.bw',
        status: 'Compliant',
        lastInspection: '2025-12-10',
        complianceScore: 85,
        inspectionHistory: []
      },
      { id: 8,
        name: 'Ghanzi Landfill Site',
        owner: 'Ghanzi District Council',
        location: 'Ghanzi',
        lat: -21.7,
        lng: 21.65,
        contact: '+267 71234567',
        email: 'info@ghanzi.gov.bw',
        status: 'Non-Compliant',
        lastInspection: '2025-10-05',
        complianceScore: 45,
        inspectionHistory: []
      },
      { id: 9,
        name: 'Kanye Waste Transfer Station',
        owner: 'Southern District Council',
        location: 'Kanye',
        lat: -25.35,
        lng: 24.7,
        contact: '+267 71234567',
        email: 'info@southerndistrict.gov.bw',
        status: 'Compliant',
        lastInspection: '2025-12-10',
        complianceScore: 90,
        inspectionHistory: []
      },
      { id: 10,
        name: 'Pula Super Spar',
        owner: 'Retail Botswana Ltd',
        location: 'Gaborone',
        lat: -24.65,
        lng: 25.91,
        contact: '+267 71234567',
        email: 'info@retailbotswana.co.bw',
        status: 'Compliant',
        lastInspection: '2025-12-10',
        complianceScore: 95,
        inspectionHistory: []
      }
  ];

  filteredFacilities: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredFacilities = [...this.facilities];
    this.updateStatistics();
  }

  updateStatistics() {
    this.totalFacilities = this.facilities.length;
    this.compliantCount = this.facilities.filter(f => f.status === 'Compliant').length;
    this.nonCompliantCount = this.facilities.filter(f => f.status === 'Non-Compliant').length;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
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

    this.view.when(() => {
      this.plotFacilitiesOnMap();
      this.setupMapClickHandler();
    });

    try {
      const districtLayer = new FeatureLayer({
        url: "https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1/FeatureServer/0",
        title: "Botswana Districts"
      });
      map.add(districtLayer);
    } catch (error) {
      console.log('District layer not available');
    }
  }

  plotFacilitiesOnMap() {
    if (!this.graphicsLayer) return;
    this.graphicsLayer.removeAll();

    const graphics = this.filteredFacilities.map(f => {
      let color = '#56bc6e';
      switch (f.status) {
        case 'Compliant': color = '#4bb964'; break;
        case 'Non-Compliant': color = '#c25560'; break;
        case 'Pending': color = '#c2a756'; break;
        default: color = '#6c757d';
      }

      return new Graphic({
        geometry: {
          type: "point",
          longitude: f.lng,
          latitude: f.lat
        },
        symbol: {
          type: "simple-marker",
          color: color,
          size: 14,
          outline: { color: "white", width: 2 }
        },
        attributes: { id: f.id, ...f },
        popupTemplate: {
          title: "{name}",
          content: `
            <strong>Owner:</strong> {owner}<br/>
            <strong>Location:</strong> {location}<br/>
            <strong>Status:</strong> {status}<br/>
            <strong>Last Inspection:</strong> {lastInspection}
          `
        }
      });
    });

    this.graphicsLayer.addMany(graphics);
  }

  setupMapClickHandler() {
    this.view.on("click", (event) => {
      this.view.hitTest(event).then((response) => {
        const graphicHit = response.results.find((r: any) => r.type === "graphic");
        if (!graphicHit) return;

        const graphic = (graphicHit as any).graphic;
        if (graphic && graphic.attributes) {
          const facilityId = graphic.attributes.id;
          const facility = this.facilities.find(f => f.id === facilityId);
          if (facility) {
            this.selectFacility(facility);
            this.zoomToFacility(facility);
          }
        }
      });
    });
  }

  selectFacility(facility: any) {
    this.selectedFacility = facility;
    this.updateChart();

    // Highlight table row
    const rows = document.querySelectorAll('.facility-row');
    rows.forEach(row => row.classList.remove('selected'));
    const selectedRow = document.querySelector(`.facility-row[data-id="${facility.id}"]`);
    if (selectedRow) {
      selectedRow.classList.add('selected');
      selectedRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  zoomToFacility(facility: any) {
    this.view.goTo({
      center: [facility.lng, facility.lat],
      zoom: 14,
      speed: 500
    }).catch(error => console.error('Zoom error:', error));
  }

  updateChart() {
    if (!this.selectedFacility) return;

    const complianceData = {
      labels: ['Compliance', 'Gap'],
      datasets: [{
        data: [this.selectedFacility.complianceScore, 100 - this.selectedFacility.complianceScore],
        backgroundColor: ['#28a745', '#dc3545'],
        borderWidth: 0
      }]
    };

    if (this.facilityChart) {
      this.facilityChart.destroy();
    }

    this.facilityChart = new Chart(this.facilityChartRef.nativeElement, {
      type: 'doughnut',
      data: complianceData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  applyFilters() {
    this.filteredFacilities = this.facilities.filter(f => {
      const matchStatus = this.selectedStatus === 'All' || f.status === this.selectedStatus;
      const matchSearch = !this.searchText ||
        f.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        f.owner.toLowerCase().includes(this.searchText.toLowerCase()) ||
        f.location.toLowerCase().includes(this.searchText.toLowerCase());

      return matchStatus && matchSearch;
    });

    this.plotFacilitiesOnMap();
  }

  clearFilters() {
    this.searchText = '';
    this.selectedStatus = 'All';
    this.applyFilters();
  }

  assignInspector(facility: any) {
    alert(`📋 Assigning inspector to ${facility.name}\n\nAn inspection request has been sent.`);
  }

  getLatestNote(facility: any): string {
    if (facility.inspectionHistory && facility.inspectionHistory.length > 0) {
      const latest = facility.inspectionHistory[facility.inspectionHistory.length - 1];
      return latest.findings;
    }
    return 'No inspection records available';
  }

  async downloadPDF() {
    if (!this.selectedFacility) {
      alert('Please select a facility first');
      return;
    }

    try {
      const pdfContent = document.createElement('div');
      pdfContent.style.padding = '20px';
      pdfContent.style.backgroundColor = 'white';
      pdfContent.style.width = '800px';
      pdfContent.style.fontFamily = 'Arial, sans-serif';

      pdfContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #00204a;">Facility Compliance Report</h1>
          <hr style="border: 1px solid #00204a;">
        </div>

        <div style="margin-bottom: 20px;">
          <h3>Facility Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px;"><strong>Name:</strong></td><td>${this.selectedFacility.name}</td></tr>
            <tr><td style="padding: 8px;"><strong>Owner:</strong></td><td>${this.selectedFacility.owner}</td></tr>
            <tr><td style="padding: 8px;"><strong>Location:</strong></td><td>${this.selectedFacility.location}</td></tr>
            <tr><td style="padding: 8px;"><strong>Status:</strong></td><td>${this.selectedFacility.status}</td></tr>
            <tr><td style="padding: 8px;"><strong>Last Inspection:</strong></td><td>${this.selectedFacility.lastInspection}</td></tr>
           </>
        </div>

        <div style="margin-top: 30px; text-align: center; font-size: 10px; color: #999;">
          <hr>
          <p>Generated on ${new Date().toLocaleString()}</p>
          <p>Environmental Management Authority - Botswana</p>
        </div>
      `;

      document.body.appendChild(pdfContent);

      if (this.view) {
        const screenshot = await this.view.takeScreenshot({ width: 600, height: 400, format: "png" });
        const mapImage = document.createElement('img');
        mapImage.src = screenshot.dataUrl;
        mapImage.style.width = '100%';
        mapImage.style.marginTop = '20px';

        const tableDiv = pdfContent.querySelector('table');
        if (tableDiv) {
          const mapTitle = document.createElement('h3');
          mapTitle.textContent = 'Facility Location';
          mapTitle.style.marginTop = '20px';
          tableDiv.insertAdjacentElement('afterend', mapTitle);
          tableDiv.insertAdjacentElement('afterend', mapImage);
        }
      }

      const canvas = await html2canvas(pdfContent, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`facility-${this.selectedFacility.name}.pdf`);

      document.body.removeChild(pdfContent);
    } catch (err) {
      console.error('PDF error:', err);
      alert('Failed to generate PDF');
    }
  }
}
