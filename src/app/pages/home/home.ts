import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

features = [
  {
    icon: 'fa-solid fa-file-circle-check',
    title: 'Permit Management',
    description: 'Apply, track, and manage environmental permits and approvals.',
    route: '/permits',
    delay: 100
  },
  {
    icon: 'fa-solid fa-map-location-dot',
    title: 'Environmental Reports',
    description: 'Access GIS-based reports on ecosystems, pollution, and land use.',
    route: '/reports',
    delay: 200
  },
  {
    icon: 'fa-solid fa-user-shield',
    title: 'Authorized Inspectors',
    description: 'Connect with certified inspectors for compliance verification.',
    route: '/inspectors',
    delay: 300
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Compliance Tracking',
    description: 'Monitor compliance staus of facilities and operations with real-time updates.',
    route: '/compliance',
    delay: 400
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    title: 'Violation Reporting',
    description: 'Report environmental violations with location and evidence.',
    route: '/violations',
    delay: 500
  },
  {
    icon: 'fa-solid fa-industry',
    title: 'Regulated Facilities',
    description: 'View industries, plants, and sites under environmental regulation.',
    route: '/facilities',
    delay: 600
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Mobile Application',
    description: 'Access environmental data and reports on the go.',
    route: '/mobile',
    delay: 600
  }
];

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

}
