export interface DepartmentMapConfig {
  serviceUrl: string;
  layers: MapLayer[];
  initialExtent: MapExtent;
}

export interface MapLayer {
  id: string;
  title: string;
  visible: boolean;
  popupTemplate?: PopupTemplate;
}

export interface PopupTemplate {
  title: string;
  content: string;
}

export interface MapExtent {
  center: [number, number];
  zoom: number;
}

/* 🔥 IMPORTANT: what your map returns */
export interface MapSelection {
  type: 'point' | 'polygon';
  lat: number;
  lng: number;
  geometry: any; // upgrade later → __esri.Geometry
  displayText: string;
}

export interface MapSelection {
  type: 'point' | 'polygon';
  lat: number;
  lng: number;
  geometry: any;
  displayText: string;
}
