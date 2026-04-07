import { PermitsComponent } from './pages/permits/permits';
import { LoginComponent } from './pages/login/login';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ReportsComponent } from './pages/reports/reports';
import { InspectorsComponent } from './pages/inspectors/inspectors';
import { ComplianceComponent } from './pages/compliance/compliance';
import { ViolationsComponent } from './pages/violations/violations';
import { FacilitiesComponent } from './pages/facilities/facilities';
import { MobileComponent } from './pages/mobile/mobile';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'permits', component: PermitsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'inspectors', component: InspectorsComponent },
  { path: 'compliance', component: ComplianceComponent },
  { path: 'violations', component: ViolationsComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'mobile', component: MobileComponent },
];
