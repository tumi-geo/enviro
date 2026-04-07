import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import IdentityManager from '@arcgis/core/identity/IdentityManager';

@Component({
  selector: 'app-map',
  standalone: true,
  template: `<div #mapViewNode class="map-container"></div>`,
  styles: [`.map-container { height: 100vh; width: 100%; }`]
})
export class MapComponent implements OnInit {

  @ViewChild('mapViewNode', { static: true }) mapEl!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const village = this.route.snapshot.paramMap.get('village');
    const type = this.route.snapshot.paramMap.get('type');

    const map = new Map({
      basemap: "satellite"
    });

    const view = new MapView({
      container: this.mapEl.nativeElement,
      map: map,
      center: [25.91, -24.65],
      zoom: 7
    });

     IdentityManager.registerToken({
      server: 'https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1_view/FeatureServer',
      token: 'ak-ossN4w2ftiKkFEPGdNOA..CXMmpB91p3C4h0LgFeQBmeG5-G96s7b2Hv01L1brCAMPHwzveq6V7z3cPvqvSeHmodFqFGPHrBXshUM7QQFuxvBmSKf2CKF5RFsLi0kpexScD36auwpZmCarIgTO2NpZW5JLYPezdIGsI5A.'
    });

    // 🔗 ArcGIS Online Feature Layer
    const layer = new FeatureLayer({
      url: "https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1/FeatureServer/0",

      // 🔥 Dynamic filtering
      definitionExpression: `
        village = '${village}' AND activity_type = '${type}'
      `
    });

    map.add(layer);
  }
}
