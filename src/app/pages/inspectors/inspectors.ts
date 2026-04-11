import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

@Component({
  selector: 'app-authorized-inspectors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inspectors.html',
  styleUrls: ['./inspectors.css']
})
export class InspectorsComponent  implements OnInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;

 inspectors = [
  { name: 'Kabelo', surname: 'Molefe', regNo: 'ENV-001', district: 'Gaborone', years: 8, office: 'Gaborone', email: 'kabelo@eco.bw', phone: '+26771234567' },
  { name: 'Naledi', surname: 'Dube', regNo: 'ENV-002', district: 'Francistown', years: 5, office: 'Francistown', email: 'naledi@green.bw', phone: '+26772345678' },
  { name: 'Thabo', surname: 'Kgosi', regNo: 'ENV-003', district: 'Maun', years: 10, office: 'Maun', email: 'thabo@enviro.bw', phone: '+26773456789' },
  { name: 'Goaba', surname: 'Moremo', regNo: 'ENV-055', district: 'Kanye', years: 3, office: 'Kanye', email: 'goaba@gov.bw', phone: '+26773456789' },
  { name: 'Katlego', surname: 'Fahilna', regNo: 'ENV-013', district: 'Lobatse', years: 3, office: 'Lobatse', email: 'katlef@gov.bw', phone: '+26773456789' }
];

  filteredInspectors = [...this.inspectors];

  selectedLocation = '';
  selectedDistrict = '';
  selectedYears = '';

  ngOnInit(): void {
    this.initMap();
  }

  // 🔍 FILTER LOGIC
filterInspectors() {
  this.filteredInspectors = this.inspectors.filter(i => {
    return (
      (!this.selectedLocation || i.office === this.selectedLocation) &&
      (!this.selectedDistrict || i.district === this.selectedDistrict) &&
      (!this.selectedYears || i.years >= +this.selectedYears)
    );
  });
}

districts = [
  'Gaborone','Francistown','Serowe','Molepolole','Boteti',
  'Palapye','Mahalapye','Kanye','Kasane','Ghanzi','Lobatse'
];
  // 👁️ VIEW PROFILE
  viewProfile(inspector: any) {
    alert(`Viewing profile for ${inspector.name} ${inspector.surname}`);
  }

  // 🧭 ASSIGN INSPECTION
  assignInspection(inspector: any) {
    alert(`Assigning inspection to ${inspector.name}`);
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

    const coverageLayer = new FeatureLayer({
      url: "https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1/FeatureServer/0",
      title: "Inspector Coverage Areas"
    });

    map.add(coverageLayer);
  }
}
