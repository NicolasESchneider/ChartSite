export class Graph {

  constructor({xAxisMin, xAxisLabel, yAxisMin, yAxisLabel}) {
    this.xAxis = { label: xAxisLabel, min: xAxisMin }
    this.yAxis = { label: yAxisLabel, min: yAxisMin }
  }
}