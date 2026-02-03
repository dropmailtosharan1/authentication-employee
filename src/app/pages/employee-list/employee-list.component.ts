import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeModule } from '../../models/employee.module';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatGridListModule, MatDialogModule, MatSnackBarModule],
 
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModule[] = [];
  columns = ['name', 'position', 'email', 'actions'];

  constructor(private svc: EmployeeService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit() { this.load(); }

  load() {
    this.svc.list().subscribe(e => this.employees = e);
  }

  create() { this.router.navigate(['/home/new']); }
  edit(id?: number) { if (id) this.router.navigate(['/home/edit', id]); }
  view(id?: number) { if (id) this.router.navigate(['/home/view', id]); }
  remove(id?: number) {
    if (!id) return;
    if (!confirm('Delete this employee?')) return;
    this.svc.delete(id).subscribe(() => {
      this.snack.open('Deleted', 'Close', { duration: 2000 });
      this.load();
    });
  }
}
