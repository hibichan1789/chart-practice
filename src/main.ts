import { Chart } from "chart.js/auto";
import type { ChartConfiguration, ChartData } from "chart.js/auto";

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
  renderChart(chartData, canvas);
}
function renderChart(chartData:ChartData, canvas:HTMLCanvasElement):void{
  //canvas要素であることをアサーションすることでcanvasの機能を使えるようにする
  
  new Chart(
    canvas,
    {
      type:"pie",
      data:chartData,
      options:{
        responsive:true,
        plugins:{
          title:{
            display:true,
            text:"家計簿カテゴリ別内訳"
          }
        }
      }
    }
  )
}