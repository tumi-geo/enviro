import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-permiting',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './permiting.html',
  styleUrl: './permiting.css',
})
export class PermitingComponent {
  features = [
  {
    icon: 'fa-solid fa-file-circle-check',
    title: 'Permit Application',
    description: 'Access permit application, view existing permits, and track performance through dashboards.',
    route: '/permits',
    delay: 100
  },
  {
    icon: 'fa-solid fa-chart-simple',
    title: 'Permit Status Tracking',
    description: 'Check the status of your application, receive updates, and manage compliance requirements.',
    route: '/permit-status',
    delay: 200
  },
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    title: 'Directory of Active Permits',
    description: 'See perimits issued and their details, including conditions and expiration dates.',
    route: '/inspectors',
    delay: 300
  }
];

}
