import { ChangeDetectorRef, Component, OnInit,AfterViewInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';

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
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule ,MatLabel,MatFormFieldModule,MatInputModule,MatSortModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
displayedColumns: string[] = [
  'id',
  'employee_name',
  'employee_age',
  'employee_salary'
];
  isLoading = true;
  errorMessage: string | null = null;
  dataSource = new MatTableDataSource<Employee>([]);
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

 private loadEmployees(): void {
  this.http.get<EmployeeResponse>('assets/employee.json').subscribe({
    next: (result) => {
      this.dataSource.data = result?.data ?? [];
      this.cdr.detectChanges();
    }
  });

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  this.dataSource.filter = value.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
