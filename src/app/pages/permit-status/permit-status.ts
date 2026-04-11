import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PermitService, Permit } from '../../../services/permit';

// ArcGIS
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

@Component({
  selector: 'app-permit-status',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './permit-status.html',
  styleUrls: ['./permit-status.css']
})
export class PermitStatusComponent implements OnInit, AfterViewInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;

  map!: Map;
  view!: MapView;
  graphicsLayer = new GraphicsLayer();

  allPermits: Permit[] = [];
  filteredPermits: Permit[] = [];

  selectedStatus: string = '';
  searchText: string = '';

  loading = true;
  selectedPermit: Permit | null = null;

  constructor(private permitService: PermitService) {}

  ngOnInit(): void {
    this.loadPermits();
  }

  loadPermits(): void {
    this.loading = true;
    this.permitService.getPermits().subscribe({
      next: (data) => {
        this.allPermits = data;
        this.filteredPermits = data;
        this.loading = false;

        if (this.view) {
          this.plotPermitsOnMap(this.filteredPermits);
        }
      },
      error: (err) => {
        console.error('Error loading permits', err);
        this.loading = false;
        // Mock data for demo if API fails
        this.loadMockData();
      }
    });
  }

  private loadMockData(): void {
    this.allPermits = [
      {
        permitRef: 'ENV-2024-001',
        applicant: 'John Doe',
        contact: '+267 71234567',
        projectName: 'Gaborone Mall Extension',
        category: 'Construction',
        location: 'Gaborone CBD',
        status: 'Approved',
        lat: -24.6282,
        lng: 25.9231
      },
      {
        permitRef: 'ENV-2024-002',
        applicant: 'Jane Smith',
        contact: '+267 72345678',
        projectName: 'Francistown Mining',
        category: 'Mining',
        location: 'Francistown',
        status: 'Pending',
        lat: -21.1700,
        lng: 27.5000
      },
      {
        permitRef: 'ENV-2024-003',
        applicant: 'Bob Johnson',
        contact: '+267 73456789',
        projectName: 'Maun Eco Lodge',
        category: 'Tourism',
        location: 'Maun',
        status: 'Approved',
        lat: -19.9833,
        lng: 23.4167
      },
      {
        permitRef: 'ENV-2024-004',
        applicant: 'Mary Brown',
        contact: '+267 74567890',
        projectName: 'Lobatse Industrial Park',
        category: 'Manufacturing',
        location: 'Lobatse',
        status: 'Rejected',
        lat: -25.2000,
        lng: 25.6667
      },
      {
        permitRef: 'ENV-2024-005',
        applicant: 'Peter Wilson',
        contact: '+267 75678901',
        projectName: 'Kasane Water Treatment',
        category: 'Water Treatment',
        location: 'Kasane',
        status: 'Pending',
        lat: -17.8167,
        lng: 25.1500
      }
    ];
    this.filteredPermits = this.allPermits;
    this.loading = false;
    this.plotPermitsOnMap(this.filteredPermits);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeMap();
    }, 100);
  }

  private initializeMap(): void {
    try {
      this.map = new Map({
        basemap: "streets-vector"
      });

      this.view = new MapView({
        container: this.mapEl.nativeElement,
        map: this.map,
        center: [25.91, -24.65],
        zoom: 7
      });

      this.view.when(() => {
        console.log('Map loaded successfully');
        this.map.add(this.graphicsLayer);
        this.plotPermitsOnMap(this.filteredPermits);
      }).catch((error) => {
        console.error('Map view error:', error);
      });
    } catch (error) {
      console.error('Map initialization error:', error);
    }
  }

  plotPermitsOnMap(permits: Permit[]) {
    if (!this.graphicsLayer || !this.view) return;

    this.graphicsLayer.removeAll();

    const graphics: Graphic[] = permits
      .filter(p => p.lat != null && p.lng != null)
      .map(p => {
        let color = '#6c757d';
        let size = 12;

        switch (p.status) {
          case 'Approved':
            color = '#28a745';
            size = 14;
            break;
          case 'Pending':
            color = '#ffc107';
            size = 12;
            break;
          case 'Rejected':
            color = '#dc3545';
            size = 12;
            break;
          default:
            color = '#007bff';
        }

        const graphic = new Graphic({
          geometry: {
            type: "point",
            longitude: Number(p.lng),
            latitude: Number(p.lat)
          },
          symbol: {
            type: "simple-marker",
            color: color,
            size: size,
            outline: {
              color: "white",
              width: 2
            }
          },
          attributes: p,
          popupTemplate: {
            title: p.projectName,
            content: `
              <strong>Applicant:</strong> ${p.applicant}<br/>
              <strong>Contact:</strong> ${p.contact}<br/>
              <strong>Location:</strong> ${p.location}<br/>
              <strong>Category:</strong> ${p.category}<br/>
              <strong>Status:</strong>
              <span style="color: ${color}; font-weight: bold;">${p.status}</span><br/>
              <strong>Reference:</strong> ${p.permitRef}
            `
          }
        });

        // Add click handler
        this.view.on("click", (event) => {
          this.zoomToPermit(p);
          this.selectedPermit = p;
        });

        return graphic;
      });

    this.graphicsLayer.addMany(graphics);

    if (graphics.length > 0 && permits.length === this.filteredPermits.length) {
      this.view.goTo(graphics);
    }
  }

  filterPermits() {
    this.filteredPermits = this.allPermits.filter(p => {
      const matchesStatus = !this.selectedStatus || p.status === this.selectedStatus;

      const matchesSearch = !this.searchText ||
        p.applicant?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.projectName?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.location?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.permitRef?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        p.category?.toLowerCase().includes(this.searchText.toLowerCase());

      return matchesStatus && matchesSearch;
    });

    this.plotPermitsOnMap(this.filteredPermits);

    if (this.filteredPermits.length === 1) {
      this.zoomToPermit(this.filteredPermits[0]);
    }
  }

  zoomToPermit(p: Permit) {
    if (p.lat == null || p.lng == null) return;

    this.selectedPermit = p;

    this.view.goTo({
      center: [Number(p.lng), Number(p.lat)],
      zoom: 14,
      speed: 500
    }).catch(error => console.error('Zoom error:', error));

    // Highlight selected row
    const rows = document.querySelectorAll('.permit-row');
    rows.forEach(row => row.classList.remove('selected'));
    const eventTarget = event?.target as HTMLElement;
    const row = eventTarget?.closest('.permit-row');
    if (row) row.classList.add('selected');
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedStatus = '';
    this.filterPermits();
  }

  getStatusCount(status: string): number {
    return this.allPermits.filter(p => p.status === status).length;
  }
}
