import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private snack: MatSnackBar) {}

  submit() {
    const { name, email, password } = this.form.value;
    this.auth.signup(name, email, password).subscribe(() => {
      this.snack.open('Registered. Logging in...', 'Close', { duration: 2000 });
      this.router.navigate(['/login']);
    });
  }
}
