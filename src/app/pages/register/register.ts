import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  fullName = '';
  email = '';
  phone = '';
  password = '';
  confirmPassword = '';

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Register Data:', {
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password
    });
  }
}
