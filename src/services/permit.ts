import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Permit {
  id?: string;

  applicant: string;
  contact: string;

  projectName: string;
  category: string;

  location: string;
  status: string;

  // 🗺️ GIS fields (IMPORTANT FIX)
  lat?: number | null;
  lng?: number | null;

  // 🧾 tracking
  permitRef?: string;
}

export interface CreatePermitResponse {
  permitRef: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class PermitService {

  private apiUrl = '/api/permits';

  constructor(private http: HttpClient) {}

  // 📥 GET ALL PERMITS
  getPermits(): Observable<Permit[]> {
    return this.http.get<Permit[]>(this.apiUrl);
  }

  // 📤 CREATE PERMIT (with files)
  createPermit(data: FormData): Observable<CreatePermitResponse> {
    return this.http.post<CreatePermitResponse>(this.apiUrl, data);
  }
}
