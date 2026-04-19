// src/app/config/map-config.ts

/**
 * Department Map Configuration
 * Central configuration for all ArcGIS map services used across different permit types
 */

// ============================================
// INTERFACES
// ============================================

export interface DepartmentLayer {
  id: string;
  title: string;
  visible: boolean;
  opacity?: number;
  minScale?: number;
  maxScale?: number;
  popupTemplate?: PopupTemplateConfig;
  definitionExpression?: string;
}

export interface PopupTemplateConfig {
  title: string;
  content: string;
  fieldInfos?: { fieldName: string; label: string }[];
}

export interface DepartmentMapConfig {
  serviceUrl: string;
  layers: DepartmentLayer[];
  initialExtent: {
    center: [number, number]; // [longitude, latitude]
    zoom: number;
    spatialReference?: {
      wkid: number;
    };
  };
  basemap?: string;
  spatialQueries?: SpatialQueryConfig[];
  tools?: {
    sketch?: boolean;
    measurement?: boolean;
    print?: boolean;
  };
}

export interface SpatialQueryConfig {
  name: string;
  layerId: string;
  bufferDistance?: number;
  fields: string[];
}

// ============================================
// CONSTANTS
// ============================================

// Botswana-specific spatial reference (WGS 1984 Web Mercator Auxiliary Sphere)
export const BOTSWANA_SPATIAL_REFERENCE = {
  wkid: 102100
};

// Default Botswana center coordinates [longitude, latitude]
export const BOTSWANA_CENTER: [number, number] = [25.91, -24.65];

// Default zoom level for country view
export const BOTSWANA_ZOOM = 7;

// ============================================
// CENTRAL CONFIG - DEPARTMENT MAPS
// ============================================

export const DEPARTMENT_MAPS: Record<string, DepartmentMapConfig> = {

  EIA: {
    serviceUrl: 'https://services7.arcgis.com/mbEujVpJG0aE29fS/arcgis/rest/services/Administrative_Districts_and_Constituency_Map_WFL1_view/FeatureServer',
    basemap: 'topo-vector',
    layers: [
      {
        id: '0',
        title: 'Protected Areas',
        visible: true,
        opacity: 0.7,
        popupTemplate: {
          title: '{NAME}',
          content: `
            <b>Type:</b> {PROTECTION_TYPE}<br>
            <b>IUCN Category:</b> {IUCN_CAT}<br>
            <b>Area:</b> {AREA_HA} ha
          `
        }
      },
      {
        id: '1',
        title: 'Sensitive Habitats',
        visible: true,
        opacity: 0.8,
        popupTemplate: {
          title: '{HABITAT_NAME}',
          content: `
            <b>Sensitivity Level:</b> {SENSITIVITY}<br>
            <b>Key Species:</b> {SPECIES_LIST}
          `
        }
      },
      {
        id: '2',
        title: 'Water Bodies',
        visible: true,
        opacity: 0.6,
        popupTemplate: {
          title: '{WATER_NAME}',
          content: `
            <b>Type:</b> {WATER_TYPE}<br>
            <b>Buffer Zone:</b> {BUFFER_DIST}m
          `
        }
      },
      {
        id: '3',
        title: 'Air Quality Zones',
        visible: false,
        opacity: 0.5
      }
    ],
    initialExtent: {
      center: BOTSWANA_CENTER,
      zoom: 10,
      spatialReference: BOTSWANA_SPATIAL_REFERENCE
    },
    spatialQueries: [
      {
        name: 'ProtectedAreaProximity',
        layerId: '0',
        bufferDistance: 5000,
        fields: ['NAME', 'PROTECTION_TYPE']
      },
      {
        name: 'WaterBodyProximity',
        layerId: '2',
        bufferDistance: 500,
        fields: ['WATER_NAME', 'WATER_TYPE']
      }
    ],
    tools: {
      sketch: true,
      measurement: true,
      print: false
    }
  },

  FACILITY: {
    serviceUrl: 'https://services.arcgis.com/example/facility/FeatureServer',
    basemap: 'streets-vector',
    layers: [
      {
        id: '0',
        title: 'Industrial Zones',
        visible: true,
        opacity: 0.7,
        popupTemplate: {
          title: 'Zone: {ZONE_CODE}',
          content: `
            <b>Category:</b> {ZONE_CATEGORY}<br>
            <b>Permitted Uses:</b> {PERMITTED_USES}
          `
        }
      },
      {
        id: '1',
        title: 'Utilities',
        visible: false,
        opacity: 0.7
      },
      {
        id: '2',
        title: 'Infrastructure',
        visible: true,
        opacity: 0.8
      },
      {
        id: '3',
        title: 'Land Parcels',
        visible: true,
        opacity: 0.5
      }
    ],
    initialExtent: {
      center: BOTSWANA_CENTER,
      zoom: 11
    },
    spatialQueries: [
      {
        name: 'ZoningCompliance',
        layerId: '0',
        fields: ['ZONE_CODE', 'PERMITTED_USES']
      }
    ],
    tools: {
      sketch: true,
      measurement: true,
      print: true
    }
  },

  TOURISM: {
    serviceUrl: 'https://services.arcgis.com/example/tourism/FeatureServer',
    basemap: 'hybrid',
    layers: [
      {
        id: '0',
        title: 'Tourism Zones',
        visible: true,
        opacity: 0.6,
        popupTemplate: {
          title: '{ZONE_NAME}',
          content: `
            <b>Type:</b> {TOURISM_TYPE}<br>
            <b>Activities Allowed:</b> {ACTIVITIES}
          `
        }
      },
      {
        id: '1',
        title: 'Protected Wildlife Areas',
        visible: true,
        opacity: 0.7,
        popupTemplate: {
          title: '{AREA_NAME}',
          content: `
            <b>Wildlife:</b> {SPECIES}<br>
            <b>Access:</b> {ACCESS_TYPE}
          `
        }
      },
      {
        id: '2',
        title: 'Attractions',
        visible: true,
        opacity: 0.9
      },
      {
        id: '3',
        title: 'Accommodation',
        visible: false,
        opacity: 0.8
      }
    ],
    initialExtent: {
      center: [23.5, -22.0], // Okavango Delta region
      zoom: 9
    },
    tools: {
      sketch: true,
      measurement: true,
      print: true
    }
  },

  VELDHARVEST: {
    serviceUrl: 'https://services.arcgis.com/example/veld/FeatureServer',
    basemap: 'topo-vector',
    layers: [
      {
        id: '0',
        title: 'Harvest Zones',
        visible: true,
        opacity: 0.7,
        popupTemplate: {
          title: 'Zone {ZONE_ID}',
          content: `
            <b>Quota:</b> {QUOTA_KG} kg<br>
            <b>Available:</b> {REMAINING} kg
          `
        }
      },
      {
        id: '1',
        title: 'Vegetation Types',
        visible: true,
        opacity: 0.7
      },
      {
        id: '2',
        title: 'Community Areas',
        visible: true,
        opacity: 0.5
      },
      {
        id: '3',
        title: 'Protected Trees',
        visible: true,
        opacity: 0.8
      }
    ],
    initialExtent: {
      center: BOTSWANA_CENTER,
      zoom: 10
    },
    spatialQueries: [
      {
        name: 'SpeciesCheck',
        layerId: '3',
        fields: ['SPECIES_NAME', 'PROT_STATUS']
      },
      {
        name: 'QuotaAvailability',
        layerId: '0',
        fields: ['ZONE_ID', 'REMAINING', 'QUOTA_KG']
      }
    ],
    tools: {
      sketch: true,
      measurement: true,
      print: false
    }
  },

  WASTE: {
    serviceUrl: 'https://services.arcgis.com/example/waste/FeatureServer',
    basemap: 'streets-vector',
    layers: [
      {
        id: '0',
        title: 'Waste Facilities',
        visible: true,
        opacity: 0.8,
        popupTemplate: {
          title: '{FACILITY_NAME}',
          content: `
            <b>Type:</b> {FACILITY_TYPE}<br>
            <b>Capacity:</b> {CAPACITY_TONS} tons
          `
        }
      },
      {
        id: '1',
        title: 'Landfills',
        visible: true,
        opacity: 0.8,
        popupTemplate: {
          title: '{SITE_NAME}',
          content: `
            <b>Class:</b> {LANDFILL_CLASS}<br>
            <b>Remaining Life:</b> {LIFE_YEARS} years
          `
        }
      },
      {
        id: '2',
        title: 'Collection Zones',
        visible: true,
        opacity: 0.6
      },
      {
        id: '3',
        title: 'Restricted Areas',
        visible: true,
        opacity: 0.5
      },
      {
        id: '4',
        title: 'Water Protection Zones',
        visible: true,
        opacity: 0.6
      }
    ],
    initialExtent: {
      center: BOTSWANA_CENTER,
      zoom: 10
    },
    spatialQueries: [
      {
        name: 'LandfillProximity',
        layerId: '1',
        bufferDistance: 5000,
        fields: ['SITE_NAME', 'LANDFILL_CLASS']
      },
      {
        name: 'WaterProtectionCheck',
        layerId: '4',
        bufferDistance: 1000,
        fields: ['ZONE_NAME', 'PROT_LEVEL']
      }
    ],
    tools: {
      sketch: true,
      measurement: true,
      print: true
    }
  }

};

// ============================================
// BASEMAP OPTIONS
// ============================================

export const BASEMAP_OPTIONS = [
  { value: 'streets-vector', label: 'Streets' },
  { value: 'topo-vector', label: 'Topographic' },
  { value: 'hybrid', label: 'Satellite Hybrid' },
  { value: 'gray-vector', label: 'Light Gray' },
  { value: 'dark-gray-vector', label: 'Dark Gray' },
  { value: 'oceans', label: 'Oceans' }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get map configuration for a specific department
 * @param departmentType - Department type (EIA, FACILITY, TOURISM, VELDHARVEST, WASTE)
 * @returns DepartmentMapConfig or undefined if not found
 */
export function getDepartmentMapConfig(departmentType: string): DepartmentMapConfig | undefined {
  return DEPARTMENT_MAPS[departmentType.toUpperCase()];
}

/**
 * Get all available department types
 * @returns Array of department type strings
 */
export function getAvailableDepartmentTypes(): string[] {
  return Object.keys(DEPARTMENT_MAPS);
}

/**
 * Get layer configuration by ID for a specific department
 * @param departmentType - Department type
 * @param layerId - Layer ID
 * @returns DepartmentLayer or undefined if not found
 */
export function getLayerConfig(departmentType: string, layerId: string): DepartmentLayer | undefined {
  const config = DEPARTMENT_MAPS[departmentType.toUpperCase()];
  return config?.layers.find(layer => layer.id === layerId);
}

/**
 * Get visible layers for a department
 * @param departmentType - Department type
 * @returns Array of visible DepartmentLayer objects
 */
export function getVisibleLayers(departmentType: string): DepartmentLayer[] {
  const config = DEPARTMENT_MAPS[departmentType.toUpperCase()];
  return config?.layers.filter(layer => layer.visible) || [];
}

/**
 * Get spatial queries for a department
 * @param departmentType - Department type
 * @returns Array of SpatialQueryConfig or empty array
 */
export function getSpatialQueries(departmentType: string): SpatialQueryConfig[] {
  const config = DEPARTMENT_MAPS[departmentType.toUpperCase()];
  return config?.spatialQueries || [];
}

/**
 * Default map configuration (used as fallback)
 */
export const DEFAULT_MAP_CONFIG: DepartmentMapConfig = {
  serviceUrl: '',
  basemap: 'streets-vector',
  layers: [],
  initialExtent: {
    center: BOTSWANA_CENTER,
    zoom: BOTSWANA_ZOOM
  },
  tools: {
    sketch: true,
    measurement: false,
    print: false
  }
};

/**
 * Check if a department has a specific tool enabled
 * @param departmentType - Department type
 * @param toolName - Tool name (sketch, measurement, print)
 * @returns boolean
 */
export function hasToolEnabled(departmentType: string, toolName: keyof DepartmentMapConfig['tools']): boolean {
  const config = DEPARTMENT_MAPS[departmentType.toUpperCase()];
  return config?.tools?.[toolName] ?? false;
}

/**
 * Get basemap for a department (with fallback)
 * @param departmentType - Department type
 * @returns Basemap string
 */
export function getBasemap(departmentType: string): string {
  const config = DEPARTMENT_MAPS[departmentType.toUpperCase()];
  return config?.basemap || DEFAULT_MAP_CONFIG.basemap || 'streets-vector';
}
