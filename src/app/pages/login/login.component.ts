import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule],
 
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private snack: MatSnackBar) {}

  submit() {
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe(ok => {
      if (ok) {
        this.router.navigate(['/home']);
      } else {
        this.snack.open('Invalid credentials', 'Close', { duration: 3000 });
      }
    });
  }
}