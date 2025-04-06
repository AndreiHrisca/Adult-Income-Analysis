import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-data-view',
  template: `
    <div *ngIf="data">
      {{ data | json }}
    </div>
  `,
  imports: [CommonModule]
})
export class DataViewComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8000/api/workclass')
      .subscribe(response => {
        this.data = response;
      });
  }
}