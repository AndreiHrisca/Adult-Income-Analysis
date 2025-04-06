import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  standalone: true,
  selector: 'app-workclass-chart',
  templateUrl: './workclass-chart.component.html',
  styleUrls: ['./workclass-chart.component.css']
})
export class WorkclassChartComponent implements OnInit {
  data: { name: string; value: number }[] = [];

  view: [number, number] = [700, 400];

  // Opciones de visualización para ngx-charts
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Workclass';
  showYAxisLabel = true;
  yAxisLabel = 'Count';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getWorkclassData().subscribe(
      (response: any[]) => {
        this.data = response.map((item: any) => {
          return { name: item.workclass, value: item.count };
        });
      },
      (error: any) => {
        console.error('Error al obtener los datos de workclass', error);
      }
    );
  }
}