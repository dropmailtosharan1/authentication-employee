import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private svc: EmployeeService, private router: Router, private snack: MatSnackBar) {}

  form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    position: [''],
    phone: ['']
  });
  isEdit = false;
  id?: number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.id = +id;
        this.svc.get(+id).subscribe(emp => this.form.patchValue(emp));
      }
    });
  }

  save() {
    if (this.isEdit && this.id) {
      this.svc.update(this.id, this.form.value).subscribe(() => {
        this.snack.open('Updated', 'Close', { duration: 2000 });
        this.router.navigate(['/home']);
      });
    } else {
      this.svc.create(this.form.value).subscribe(() => {
        this.snack.open('Created', 'Close', { duration: 2000 });
        this.router.navigate(['/home']);
      });
    }
  }

  cancel() { this.router.navigate(['/home']); }
}