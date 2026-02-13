//main.ts
import { renderChart } from "./chart";
import { fetchData } from "./api";
import type { ExpenseData } from "./interface";
import { generateExpenseChartData } from "./expense";

const apiUrl = "/data.json";
try{
  const expenseData:ExpenseData = await fetchData<ExpenseData>(apiUrl);
  const expenseChartData = generateExpenseChartData(expenseData);
  const canvas = document.querySelector("#my-chart") as HTMLCanvasElement;
  if(!canvas){
    console.error("canvas要素がありません")
  }
  else{
    renderChart(expenseChartData, "家計簿", canvas);
  }
}
catch(error){
  console.error("データが取得できませんでした", error);
}
