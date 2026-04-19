import { Injectable } from '@angular/core';
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import { DEPARTMENT_MAPS } from '../app/config/map-config.config'
import { MapSelection } from '../app/models/map.js'

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private graphicsLayer = new GraphicsLayer();

  createMap(container: HTMLDivElement, type: string): MapView {

    const config = DEPARTMENT_MAPS[type];

    const map = new Map({
      basemap: "streets-vector",
      layers: [this.graphicsLayer]
    });

    // 🔥 Add dynamic layers
    config.layers.forEach(layer => {
      const featureLayer = new FeatureLayer({
        url: `${config.serviceUrl}/${layer.id}`,
        visible: layer.visible,
        title: layer.title
      });

      map.add(featureLayer);
    });

    return new MapView({
      container,
      map,
      center: config.initialExtent.center,
      zoom: config.initialExtent.zoom
    });
  }

  createSketch(view: MapView, callback: (data: MapSelection) => void): SketchViewModel {

    const sketch = new SketchViewModel({
      view,
      layer: this.graphicsLayer
    });

    sketch.on("create", (event) => {
      if (event.state === "complete") {

        const geom: any = event.graphic.geometry;

        let result: MapSelection;

        if (geom.type === "point") {
          result = {
            type: 'point',
            lat: geom.latitude,
            lng: geom.longitude,
            geometry: geom,
            displayText: `Lat: ${geom.latitude.toFixed(6)}, Lng: ${geom.longitude.toFixed(6)}`
          };
        } else {
          const centroid = geom.centroid;

          result = {
            type: 'polygon',
            lat: centroid.latitude,
            lng: centroid.longitude,
            geometry: geom,
            displayText: `Polygon selected (Centroid: ${centroid.latitude.toFixed(6)}, ${centroid.longitude.toFixed(6)})`
          };
        }

        callback(result);
      }
    });

    return sketch;
  }

  clearGraphics() {
    this.graphicsLayer.removeAll();
  }
}


