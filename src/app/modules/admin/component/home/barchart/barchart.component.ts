import { Component } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {

   // Array of different segments in chart
   barChartData: ChartDataSets[] = [
    { data: [4040000, 5620000, 3250000, 2156000, 1364000 ], label: 'Tuần 1' },
    { data: [2150000, 4821000, 1784000, 1956000, 5210000 ], label: 'Tuần 2' },
    { data: [1250000, 1400000, 6784000, 5956000, 4210000 ], label: 'Tuần 3' },
    { data: [3755000, 6950000, 6510000, 4389000, 5290000 ], label: 'Tuần 4' },
    { data: [1755000, 1950000, 4210000, 1389000, 6290000 ], label: 'Tuần 5' },
  ];

  //Labels shown on the x-axis
  barChartLabels: Label[] = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', ];

  // Define chart options
  barChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  barChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(251, 218, 152, 0.5)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(237, 0, 0, 0.5)',
      borderColor: 'rgba(231, 147, 147, 1)',
    },
    { // red
      backgroundColor: 'rgba(148, 245, 164, 0.5)',
      borderColor: 'rgba(148, 245, 164, 1))',
    },
    { // red
      backgroundColor: 'rgba(91, 233, 243, 0.5)',
      borderColor: 'rgba(148, 250, 250, 1)',
    },
    { // red
      backgroundColor: 'rgba(239, 152, 251, 0.5)',
      borderColor: 'rgba(239, 152, 251, 1)',
    }
  ];

  // Set true to show legends
  barChartLegend = true;

  // Define type of chart
  barChartType:ChartType = 'bar';

  barChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}