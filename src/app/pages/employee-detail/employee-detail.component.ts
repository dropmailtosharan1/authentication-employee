import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent  implements OnInit {
  employee: any;
  id?: number;

  constructor(private svc: EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      if (!id) {
        this.back();
        return;
      }
      this.id = +id;
      this.svc.get(this.id).subscribe(e => this.employee = e);
    });
  }

  edit() { if (this.id) this.router.navigate(['/home/edit', this.id]); }
  back() { this.router.navigate(['/home']); }
}