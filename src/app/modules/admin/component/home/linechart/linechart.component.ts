// line-chart.component.ts
import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {


lineChartOptions: ChartOptions = {
  responsive: true,
  scales: { xAxes: [{}], yAxes: [{}] },
};
lineChartLabels: Label[] = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'];
lineChartType: ChartType = 'line';
lineChartLegend = true;
lineChartPlugins = [];
lineChartColor: Color[]=[
  {
    borderColor: '#f08080',
    
  }
]

lineChartData: ChartDataSets[] = [
  { data: [233000, 178400, 376000, 328500, 328500,0], label: 'Doanh thu các tháng trong năm 2022' },

];

}