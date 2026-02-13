//chart.ts
import { Chart } from "chart.js/auto";
import type { ChartData, ChartConfiguration } from "chart.js/auto";


export function renderChart(chartData:ChartData<"pie">, chartTitle:string, canvas:HTMLCanvasElement):void{
    Chart.getChart(canvas)?.destroy();
    const chartConfig:ChartConfiguration<"pie"> = {
        type: "pie",
        data: chartData,
        options:{
            plugins:{
                title:{
                    display:true,
                    text:chartTitle
                }
            }
        }
    }
    new Chart(canvas, chartConfig);
}