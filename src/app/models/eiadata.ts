export interface EIAData {
  projectDescription: string;
  projectSize: string;
  projectLifespan: string;
  location: string;
  lat: number | null;
  lng: number | null;
  materials: string;
  products: string;
  landAllocated: string;
  currentLandUse: string;
  landUseChange: string;
  negativeImpacts: string;
  positiveImpacts: string;
  mitigation: string;
  additionalInfo: string;
}
