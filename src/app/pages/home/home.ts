import { Component, AfterViewInit, OnInit } from '@angular/core';
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
export class HomeComponent implements AfterViewInit, OnInit {

  features = [
    {
      icon: 'fa-solid fa-boxes-stacked',
      title: 'Permit Management',
      description: 'Apply, track, and manage environmental permits and approvals.',
      route: '/permiting',
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
      description: 'Monitor compliance status of facilities and operations with real-time updates.',
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
      delay: 700
    }
  ];

  ngOnInit() {
    // Any initialization logic
    console.log('Home component initialized');
  }

  ngAfterViewInit(): void {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
      delay: 0
    });

    // Refresh AOS to detect new elements
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }
}
