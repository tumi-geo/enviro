import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import IdentityManager from '@arcgis/core/identity/IdentityManager';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facilities.html',
  styleUrls: ['./facilities.css']
})
export class FacilitiesComponent implements AfterViewInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;

  facilities = [
     {
      name: 'Palapye Waste Management Facility',
      owner: 'Water Utilties Corporation',
      location: 'Palapye',
      contact: '+267 71234567',
      email: 'info@wuc.co.bw',
      status: 'Compliant',
      lastInspection: '2025-10-10'
    },
     {
      name: 'Fracistown Clinical Waste Facility',
      owner: 'Skip Hire Botswana',
      location: 'Francistown',
      contact: '+267 77583695',
      email: 'info@skiphire.co.bw',
      status: 'Compliant',
      lastInspection: '2025-12-10'
    },
    {
      name: 'Gaborone Brick Works',
      owner: 'BuildTech Botswana',
      location: 'Gaborone',
      contact: '+267 71234567',
      email: 'info@buildtech.co.bw',
      status: 'Compliant',
      lastInspection: '2025-12-10'
    },
    {
      name: 'Francistown Gold Mine',
      owner: 'Botswana Mining Corp',
      location: 'Francistown',
      contact: '+267 72345678',
      email: 'contact@miningbw.co.bw',
      status: 'Non-Compliant',
      lastInspection: '2025-10-05'
    },
    {
      name: 'Maun Food Processing Plant',
      owner: 'AgriFoods BW',
      location: 'Maun',
      contact: '+267 73456789',
      email: 'support@agrifoods.co.bw',
      status: 'Pending',
      lastInspection: '2026-01-15'
    }
  ];

  viewFacility(facility: any) {
    alert(`Viewing ${facility.name}`);
  }

  assignInspector(facility: any) {
    alert(`Assigning inspector to ${facility.name}`);
  }

  // 🗺️ Initialize Map
  ngAfterViewInit(): void {

    const map = new Map({
      basemap: "topo-vector"
    });

    const view = new MapView({
      container: this.mapEl.nativeElement,
      map: map,
      center: [25.91, -24.65], // Botswana
      zoom: 6
    });

        IdentityManager.registerToken({
      server: 'https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1_view/FeatureServer',
      token: 'ak-ossN4w2ftiKkFEPGdNOA..CXMmpB91p3C4h0LgFeQBmeG5-G96s7b2Hv01L1brCAMPHwzveq6V7z3cPvqvSeHmodFqFGPHrBXshUM7QQFuxvBmSKf2CKF5RFsLi0kpexScD36auwpZmCarIgTO2NpZW5JLYPezdIGsI5A.'
    });


    const districtLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1/FeatureServer/0",
      title: "Botswana Districts"
    });

    map.add(districtLayer);
  }
}
