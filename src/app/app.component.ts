import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

import 'chartjs-plugin-dragdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chart: any;

  title = 'croplet_v3';

  myChartOptions: any = {
    type: 'line', // or radar, bar, horizontalBar, bubble
    data: {
      labels: ['1', '2', '3', '4', '5'],
      datasets: [{
        label: 'A',
        yAxisID: 'y',

        data: [100, 96, 84, 76, 69],
        pointHitRadius: 25,
        backgroundColor: 'blue'
      }, {
        label: 'B',
        yAxisID: 'y2',
        data: [85, 78, 71, 98, 36],
        pointHitRadius: 25,
        backgroundColor: 'red'

      },
    
      {
        label: 'C',
        yAxisID: 'y3',
        data: [5, 56, 86, 82, 74],
        pointHitRadius: 25,
        backgroundColor: 'orange'

      }]
    },
    options: {
      plugins: {
        dragData: {
          dragData: true,
          dragDataRound: 10,
          round: 0,
          dragX: true,
          dragY: true,

          showTooltip: true,
          onDragStart: function (e: any, datasetIndex: any, index: any, value: any) {

          },
          onDrag: function (e: any, datasetIndex: number, index: any, value: any) {
            e.target.style.cursor = 'grabbing'              //console.log("Drag Value: ", value.x)
          },
          onDragEnd: function (e: any, datasetIndex: any, index: any, value: any) {

            e.target.style.cursor = 'default'
          },
        },
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          max: 100,
          min: 0
        },
        y2: {
          type: 'linear',
          position: 'right',
          max: 100,
          min: 0
        }
      },
    }
  }
  constructor() {

  }

  ngOnInit(): void {
    this.createChart();
  }





  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: this.myChartOptions['data'],
      options: this.myChartOptions.options,

    });
  }
}
