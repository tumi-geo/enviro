import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  styleUrls: ['./login.css'],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.router.navigate(['/customer-details']);
    }
  }
}
