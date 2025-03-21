import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MeetingButtonComponent } from '../../shared/components/meeting-button/meeting-button.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Used for navigation

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    LoaderComponent,        // 🔴 Ensure LoaderComponent is imported
    MeetingButtonComponent,
    CommonModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authForm: FormGroup;
  stepIndex = 0;

  // 🔴 New property to control the loader display
  isLoading = false;

  // 🟢 User Database (Updated with Role-Based Credentials)
  users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'reception@example.com', password: 'reception123', role: 'receptionist' },
    { email: 'employee@example.com', password: 'employee123', role: 'employee' }
  ];

  // 🟢 Step Configuration (Dynamic)
  steps = [
    {
      title: 'Welcome!',
      subtitle: 'Sign up to manage your meetings effortlessly.',
      buttonLabel: 'Sign Up',
      fields: [
        { type: 'email', control: 'email', placeholder: 'Enter email address' },
        { type: 'password', control: 'password', placeholder: 'Enter your password', showPassword: false }
      ]
    },
    {
      title: 'Change Password',
      subtitle: 'Set a new password for your account.',
      buttonLabel: 'Change Password',
      fields: [
        { type: 'password', control: 'password', placeholder: 'Enter new password', showPassword: false },
        { type: 'password', control: 'confirmPassword', placeholder: 'Re-enter your password', showPassword: false }
      ]
    },
    {
      title: 'Success',
      subtitle: 'Set a new password for your account.',
      buttonLabel: 'Sign In',
      fields: []
    },
    {
      title: 'Welcome!',
      subtitle: 'Sign in to manage your meetings effortlessly.',
      buttonLabel: 'Sign In',
      fields: [
        { type: 'email', control: 'email', placeholder: 'Enter email address' },
        { type: 'password', control: 'password', placeholder: 'Enter your password', showPassword: false }
      ]
    }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''], // Only used for resetting password
    });
  }

  get currentStep() {
    return this.steps[this.stepIndex];
  }

  nextStep() {
    if (this.stepIndex === 1) {
      const { password, confirmPassword } = this.authForm.value;
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
    }

    if (this.stepIndex < this.steps.length - 1) {
      this.stepIndex++;
    } else {
      this.handleSignIn();
    }
  }

  handleSignIn() {
    const { email, password } = this.authForm.value;
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      // 🔴 Show the loader
      this.isLoading = true;

      // Simulate 3s loading, then redirect
      setTimeout(() => {
        this.redirectToRolePage(user.role);
        // Hide the loader if you're still on this page
        this.isLoading = false;
      }, 3000);

    } else {
      alert('Invalid credentials! Please try again.');
    }
  }

  redirectToRolePage(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/admin/layout/dashboard']);
        break;
      case 'receptionist':
        this.router.navigate(['/receptionist/layout/dashboard']);
        break;
      case 'employee':
        this.router.navigate(['/employee/layout/dashboard']);
        break;
      default:
        alert('Unknown role!');
    }
  }
}
