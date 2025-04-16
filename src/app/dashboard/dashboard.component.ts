import { Component, OnInit} from '@angular/core';
import { CommonModule, } from '@angular/common';
import {  BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration ,ChartType} from 'chart.js';
import { AppService } from '../app.service';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,BaseChartDirective ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone:true

})
export class DashboardComponent implements OnInit{
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Portfolio Value',
        fill: true,
        tension: 0.5,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true
  };


  constructor(private appService:AppService) {

  }

  ngOnInit() {
    this.appService.getChartData().subscribe({
      next: (data: ChartConfiguration<'line'>['data']) => {
        this.lineChartData = data;
      },
      error: (err) => {
        console.error('Failed to load chart data:', err);
      }
    });
  }
}
