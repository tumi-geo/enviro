// directory.component.ts
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';

interface Permit {
  id: number;
  permitRef: string;
  permitType: string;
  applicant: string;
  companyName?: string;
  contactPerson?: string;
  contact: string;
  email: string;
  location: string;
  lat: number;
  lng: number;
  issueDate: string;
  expiryDate: string;
  status: string;
  conditions?: string;
}

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directory.html',
  styleUrls: ['./directory.css']
})
export class DirectoryComponent implements AfterViewInit, OnInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;
  @ViewChild('permitChart') permitChartRef!: ElementRef;
  @ViewChild('summaryChart') summaryChartRef!: ElementRef;

  view!: MapView;
  graphicsLayer = new GraphicsLayer();

  selectedPermit: Permit | null = null;
  viewingPermit: Permit | null = null;
  showPermitModal = false;

  searchText: string = '';
  selectedPermitType: string = 'All';
  selectedStatus: string = 'All';
  selectedYear: string = 'All';

  sortField: string = 'expiryDate';
  sortDirection: 'asc' | 'desc' = 'asc';

  currentPage: number = 1;
  pageSize: number = 10;

  totalPermits: number = 0;
  activeCount: number = 0;
  expiringCount: number = 0;
  expiredCount: number = 0;

  permitChart!: Chart;
  summaryChart!: Chart;

  permits: Permit[] = [
    {
      id: 1,
      permitRef: 'EIA-2025-123456',
      permitType: 'EIA',
      applicant: 'John Modise',
      companyName: 'Green Energy Botswana',
      contactPerson: 'John Modise',
      contact: '+267 71234567',
      email: 'john@greenenergy.co.bw',
      location: 'Gaborone',
      lat: -24.6282,
      lng: 25.9231,
      issueDate: '2025-01-15',
      expiryDate: '2026-01-15',
      status: 'Active',
      conditions: 'Quarterly environmental monitoring reports required.'
    },
    {
      id: 2,
      permitRef: 'FAC-2025-789012',
      permitType: 'Facility',
      applicant: 'Water Utilities Corporation',
      companyName: 'Water Utilities Corporation',
      contactPerson: 'Mary Kelebeng',
      contact: '+267 72345678',
      email: 'mary@wuc.co.bw',
      location: 'Palapye',
      lat: -22.5500,
      lng: 27.1333,
      issueDate: '2025-03-10',
      expiryDate: '2025-12-31',
      status: 'Expiring Soon',
      conditions: 'Waste management plan must be updated annually.'
    },
    {
      id: 3,
      permitRef: 'TRS-2024-456789',
      permitType: 'Tourism',
      applicant: 'Okavango Wilderness Safaris',
      companyName: 'Okavango Wilderness Safaris',
      contactPerson: 'Thabo Nkosi',
      contact: '+267 73456789',
      email: 'thabo@okavango.co.bw',
      location: 'Maun',
      lat: -19.9833,
      lng: 23.4167,
      issueDate: '2024-06-20',
      expiryDate: '2024-12-20',
      status: 'Expired',
      conditions: 'Maximum 50 guests per day. No off-road driving.'
    },
    {
      id: 4,
      permitRef: 'WST-2026-234567',
      permitType: 'Waste',
      applicant: 'Skip Hire Botswana',
      companyName: 'Skip Hire Botswana',
      contactPerson: 'Grace Mmoloki',
      contact: '+267 74567890',
      email: 'grace@skiphire.co.bw',
      location: 'Francistown',
      lat: -21.1700,
      lng: 27.5000,
      issueDate: '2026-01-05',
      expiryDate: '2027-01-05',
      status: 'Active',
      conditions: 'Monthly waste disposal reports required.'
    },
    {
      id: 5,
      permitRef: 'VEL-2025-345678',
      permitType: 'VeldHarvest',
      applicant: 'Kabelo Masire',
      companyName: 'Masire Veld Products',
      contactPerson: 'Kabelo Masire',
      contact: '+267 75678901',
      email: 'kabelo@masire.co.bw',
      location: 'Kanye',
      lat: -25.3500,
      lng: 24.7000,
      issueDate: '2025-08-15',
      expiryDate: '2026-02-15',
      status: 'Active',
      conditions: 'Harvest quota: 500kg per season.'
    },
    {
      id: 6,
      permitRef: 'CHM-2025-567890',
      permitType: 'Chemical',
      applicant: 'Pharma Botswana Ltd',
      companyName: 'Pharma Botswana Ltd',
      contactPerson: 'Pule Dikgang',
      contact: '+267 76789012',
      email: 'pule@pharmabw.co.bw',
      location: 'Gaborone',
      lat: -24.6500,
      lng: 25.9100,
      issueDate: '2025-05-10',
      expiryDate: '2025-11-10',
      status: 'Expiring Soon',
      conditions: 'Controlled substance handling protocols must be followed.'
    },
    {
      id: 7,
      permitRef: 'EIA-2026-678901',
      permitType: 'EIA',
      applicant: 'Botswana Mining Corp',
      companyName: 'Botswana Mining Corp',
      contactPerson: 'Lerato Mogapi',
      contact: '+267 77890123',
      email: 'lerato@miningbw.co.bw',
      location: 'Selebi-Phikwe',
      lat: -21.9500,
      lng: 27.8500,
      issueDate: '2026-02-01',
      expiryDate: '2027-02-01',
      status: 'Active',
      conditions: 'Water quality monitoring every 3 months.'
    },
    {
      id: 8,
      permitRef: 'FAC-2024-789013',
      permitType: 'Facility',
      applicant: 'Lobatse Clay Works',
      companyName: 'Lobatse Clay Works',
      contactPerson: 'Odirile Tshwene',
      contact: '+267 78901234',
      email: 'odirile@lobatseclay.co.bw',
      location: 'Lobatse',
      lat: -25.2100,
      lng: 25.6800,
      issueDate: '2024-11-01',
      expiryDate: '2025-05-01',
      status: 'Expired',
      conditions: 'Air quality monitoring required.'
    }
  ];

  filteredPermits: Permit[] = [];
  permitTypes: string[] = ['EIA', 'Facility', 'Tourism', 'Waste', 'VeldHarvest', 'Chemical'];

  constructor() {}

  ngOnInit(): void {
    this.filteredPermits = [...this.permits];
    this.updateStatistics();
    this.applyFilters();
  }

  updateStatistics() {
    this.totalPermits = this.permits.length;
    this.activeCount = this.permits.filter(p => p.status === 'Active').length;
    this.expiringCount = this.permits.filter(p => p.status === 'Expiring Soon').length;
    this.expiredCount = this.permits.filter(p => p.status === 'Expired').length;

    // Update status based on dates
    this.permits.forEach(p => {
      const daysRemaining = this.getDaysRemaining(p.expiryDate);
      if (daysRemaining < 0) {
        p.status = 'Expired';
      } else if (daysRemaining <= 90) {
        p.status = 'Expiring Soon';
      } else {
        p.status = 'Active';
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
      this.initSummaryChart();
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
      this.plotPermitsOnMap();
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

  getPermitColor(permitType: string): string {
    const colors: { [key: string]: string } = {
      'EIA': '#4CAF50',
      'Facility': '#2196F3',
      'Tourism': '#9C27B0',
      'Waste': '#FF9800',
      'VeldHarvest': '#8BC34A',
      'Chemical': '#E91E63'
    };
    return colors[permitType] || '#6c757d';
  }

  plotPermitsOnMap() {
    if (!this.graphicsLayer) return;
    this.graphicsLayer.removeAll();

    const graphics = this.filteredPermits.map(p => {
      return new Graphic({
        geometry: {
          type: "point",
          longitude: p.lng,
          latitude: p.lat
        },
        symbol: {
          type: "simple-marker",
          color: this.getPermitColor(p.permitType),
          size: 14,
          outline: { color: "white", width: 2 }
        },
        attributes: {
          id: p.id,
          permitRef: p.permitRef,
          permitType: p.permitType,
          companyName: p.companyName,
          contactPerson: p.contactPerson,
          contact: p.contact,
          email: p.email,
          location: p.location,
          status: p.status,
          issuedate: p.issueDate,
          expiryDate: p.expiryDate
        },
        popupTemplate: {
          title: "{permitRef}",
          content: `
            <strong>Type:</strong> {permitType}<br/>
            <strong>Company:</strong> {companyName}<br/>
            <strong>Location:</strong> {location}<br/>
            <strong>Status:</strong> {status}<br/>
            <strong>Expires:</strong> {expiryDate}
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
          const permitId = graphic.attributes.id;
          const permit = this.permits.find(p => p.id === permitId);
          if (permit) {
            this.selectPermit(permit);
            this.zoomToPermit(permit);
          }
        }
      });
    });
  }

  selectPermit(permit: Permit) {
    this.selectedPermit = permit;
    this.updatePermitChart();
  }

  zoomToPermit(permit: Permit) {
    this.view.goTo({
      center: [permit.lng, permit.lat],
      zoom: 14,
      speed: 500
    }).catch(error => console.error('Zoom error:', error));
  }

  initSummaryChart() {
    const typeCounts = this.permitTypes.map(type =>
      this.permits.filter(p => p.permitType === type).length
    );

    this.summaryChart = new Chart(this.summaryChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.permitTypes,
        datasets: [{
          label: 'Number of Permits',
          data: typeCounts,
          backgroundColor: this.permitTypes.map(t => this.getPermitColor(t)),
          borderRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  updatePermitChart() {
    if (!this.selectedPermit) return;

    const typeData = this.permitTypes.map(type =>
      this.permits.filter(p => p.permitType === type).length
    );

    if (this.permitChart) {
      this.permitChart.destroy();
    }

    this.permitChart = new Chart(this.permitChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.permitTypes,
        datasets: [{
          data: typeData,
          backgroundColor: this.permitTypes.map(t => this.getPermitColor(t)),
          borderWidth: 0
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
  }

  getDaysRemaining(expiryDate: string): number {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isExpiringSoon(expiryDate: string): boolean {
    const days = this.getDaysRemaining(expiryDate);
    return days > 0 && days <= 90;
  }

  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      'Active': 'active',
      'Expiring Soon': 'expiring',
      'Expired': 'expired',
      'Pending Renewal': 'pending'
    };
    return classes[status] || '';
  }

  getPermitTypeClass(permitType: string): string {
    const classes: { [key: string]: string } = {
      'EIA': 'eia',
      'Facility': 'facility',
      'Tourism': 'tourism',
      'Waste': 'waste',
      'VeldHarvest': 'veld',
      'Chemical': 'chemical'
    };
    return classes[permitType] || '';
  }

  getSortIcon(field: string): string {
    if (this.sortField !== field) return 'fa-sort';
    return this.sortDirection === 'asc' ? 'fa-sort-up' : 'fa-sort-down';
  }

  sortBy(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.permits.filter(p => {
      const matchType = this.selectedPermitType === 'All' || p.permitType === this.selectedPermitType;
      const matchStatus = this.selectedStatus === 'All' || p.status === this.selectedStatus;
      const matchYear = this.selectedYear === 'All' ||
        new Date(p.issueDate).getFullYear().toString() === this.selectedYear;

      const searchLower = this.searchText.toLowerCase();
      const matchSearch = !this.searchText ||
        p.permitRef.toLowerCase().includes(searchLower) ||
        (p.companyName || p.applicant).toLowerCase().includes(searchLower) ||
        (p.contactPerson || '').toLowerCase().includes(searchLower) ||
        p.permitType.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower);

      return matchType && matchStatus && matchYear && matchSearch;
    });

    // Sort
    filtered.sort((a, b) => {
      let aVal = a[this.sortField as keyof Permit];
      let bVal = b[this.sortField as keyof Permit];

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return this.sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return 0;
    });

    this.filteredPermits = filtered;
    this.plotPermitsOnMap();
  }

  clearFilters() {
    this.searchText = '';
    this.selectedPermitType = 'All';
    this.selectedStatus = 'All';
    this.selectedYear = 'All';
    this.applyFilters();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPermits.length / this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  viewPermitDetails(permit: Permit) {
    this.viewingPermit = permit;
    this.showPermitModal = true;
  }

  closeModal() {
    this.showPermitModal = false;
    this.viewingPermit = null;
  }

  renewPermit(permit: Permit) {
    alert(`🔄 Renewal request for permit ${permit.permitRef}\n\nYou will be redirected to the renewal application.`);
  }

  async downloadPermitPDF(permit: Permit) {
    try {
      const pdfContent = document.createElement('div');
      pdfContent.style.cssText = 'padding: 30px; background: white; width: 800px; font-family: Arial;';

      pdfContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #00204a;">Environmental Permit</h1>
          <h3 style="color: #666;">${permit.permitRef}</h3>
          <hr style="border: 1px solid #00204a;">
        </div>

        <div style="margin-bottom: 20px;">
          <h3>Permit Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px;"><strong>Permit Type:</strong></td><td>${permit.permitType}</td></tr>
            <tr><td style="padding: 8px;"><strong>Issue Date:</strong></td><td>${permit.issueDate}</td></tr>
            <tr><td style="padding: 8px;"><strong>Expiry Date:</strong></td><td>${permit.expiryDate}</td></tr>
            <tr><td style="padding: 8px;"><strong>Status:</strong></td><td>${permit.status}</td></tr>
          </table>
        </div>

        <div style="margin-bottom: 20px;">
          <h3>Permit Holder</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px;"><strong>Name/Company:</strong></td><td>${permit.companyName || permit.applicant}</td></tr>
            <tr><td style="padding: 8px;"><strong>Contact Person:</strong></td><td>${permit.contactPerson || permit.applicant}</td></tr>
            <tr><td style="padding: 8px;"><strong>Contact:</strong></td><td>${permit.contact}</td></tr>
            <tr><td style="padding: 8px;"><strong>Email:</strong></td><td>${permit.email}</td></tr>
            <tr><td style="padding: 8px;"><strong>Location:</strong></td><td>${permit.location}</td></tr>
          </table>
        </div>

        ${permit.conditions ? `
        <div style="margin-bottom: 20px;">
          <h3>Permit Conditions</h3>
          <p style="padding: 10px; background: #f5f5f5; border-radius: 5px;">${permit.conditions}</p>
        </div>
        ` : ''}

        <div style="margin-top: 40px; text-align: center; font-size: 11px; color: #999;">
          <hr>
          <p>Generated on ${new Date().toLocaleString()}</p>
          <p>Environmental Management Authority - Botswana</p>
        </div>
      `;

      document.body.appendChild(pdfContent);

      const canvas = await html2canvas(pdfContent, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save(`permit-${permit.permitRef}.pdf`);

      document.body.removeChild(pdfContent);
    } catch (err) {
      console.error('PDF error:', err);
      alert('Failed to generate PDF');
    }
  }

  exportToCSV() {
    const headers = ['Permit Ref', 'Type', 'Company/Name', 'Contact Person', 'Contact', 'Email', 'Location', 'Issue Date', 'Expiry Date', 'Status'];
    const rows = this.filteredPermits.map(p => [
      p.permitRef,
      p.permitType,
      p.companyName || p.applicant,
      p.contactPerson || p.applicant,
      p.contact,
      p.email,
      p.location,
      p.issueDate,
      p.expiryDate,
      p.status
    ]);

    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `permits-directory-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  printDirectory() {
    window.print();
  }
}
