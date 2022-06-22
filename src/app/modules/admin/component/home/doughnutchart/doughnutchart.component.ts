import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styleUrls: ['./doughnutchart.component.css']
})
export class DoughnutchartComponent implements OnInit {
  ngOnInit(): void {

  }
  doughnutChartColors: Color[] = [


    { // red
      backgroundColor: ['rgba(237, 0, 0, 0.5)','rgba(148, 245, 164, 0.5)','rgba(91, 233, 243, 0.5)','rgba(239, 152, 251, 0.5)'],
    },
   

  ];
  doughnutChartLabels: Label[] = ['Quý 3 năm 2021', 'Quý 4 năm 2021', 'Quý 1 năm 2022', 'Quý 2 năm 2022'];
  doughnutChartData: MultiDataSet = [
    [1365000, 1325400, 2884400, 3301329]
  ];
  doughnutChartType: ChartType = 'doughnut';

}
