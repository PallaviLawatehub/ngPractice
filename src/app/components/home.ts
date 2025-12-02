import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}

interface EmployeeResponse {
  status: string;
  data: Employee[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  employees: Employee[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.isLoading = true;
    this.errorMessage = null;

    this.http.get<EmployeeResponse>('assets/employee.json').subscribe({
      next: (result: EmployeeResponse) => {
        this.employees = result?.data ?? [];
        this.isLoading = false;
        console.log('Home: loaded', this.employees.length, 'employees');
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = 'Failed to load employees.';
        this.isLoading = false;
        console.error('Home: error loading employees', err.message || err);
      }
    });
  }
}
