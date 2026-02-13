//main.ts
import { renderChart } from "./chart";
import type { ChartData } from "chart.js/auto";

const chartData:ChartData<"pie"> = {
  labels: ['食費', '家賃', '光熱費', '通信費', '趣味'],
  datasets: [{
    label: '今月の支出 (円)',
    data: [35000, 75000, 12000, 8000, 25000],
    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
  }]
};

const canvas = document.querySelector("#my-chart") as HTMLCanvasElement;
if(!canvas){
  console.error("canvas要素がありません")
}
else{
  renderChart(chartData, "家計簿", canvas);
}