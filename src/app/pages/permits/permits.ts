import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";

@Component({
  standalone: true,
  selector: 'app-permit-application',
  imports: [FormsModule],
  templateUrl: './permits.html',
  styleUrls: ['./permits.css']
})
export class PermitsComponent implements OnInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;

  view: any;
  marker: any;

  formData = {
    applicantName: '',
    email: '',
    phone: '',
    projectName: '',
    locationText: '',
    latitude: '',
    longitude: '',
    activityType: '',
    description: ''
  };

  ngOnInit(): void {
    const map = new Map({
      basemap: "streets-vector"
    });

    this.view = new MapView({
      container: this.mapEl.nativeElement,
      map: map,
      center: [25.91, -24.65], // Gaborone
      zoom: 10
    });

    // Click event to pick location
    this.view.on("click", (event: any) => {
      const { latitude, longitude } = event.mapPoint;

      this.formData.latitude = latitude.toFixed(6);
      this.formData.longitude = longitude.toFixed(6);
      this.formData.locationText = `Lat: ${this.formData.latitude}, Lng: ${this.formData.longitude}`;

      this.addMarker(event.mapPoint);
    });
  }

  addMarker(point: any) {
    if (this.marker) {
      this.view.graphics.remove(this.marker);
    }

    this.marker = new Graphic({
      geometry: point,
      symbol: {
        type: "simple-marker",
        color: "red",
        size: "12px"
      }
    });

    this.view.graphics.add(this.marker);
  }

  submitForm() {
    console.log('Permit Application:', this.formData);
  }
}
