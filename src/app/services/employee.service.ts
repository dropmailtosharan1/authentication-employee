import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModule } from '../models/employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = "http://localhost:3000/employees";
  constructor(private http: HttpClient) {}

  list(): Observable<EmployeeModule[]> {
    return this.http.get<EmployeeModule[]>(this.api);
  }
  get(id: number) {
    return this.http.get<EmployeeModule>(`${this.api}/${id}`);
  }
  create(emp: Partial<EmployeeModule>) {
    return this.http.post<EmployeeModule>(this.api, emp);
  }
  update(id: number, emp: Partial<EmployeeModule>) {
    return this.http.put<EmployeeModule>(`${this.api}/${id}`, emp);
  }
  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
