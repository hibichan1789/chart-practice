//main.ts
import { renderChart } from "./chart";
import { fetchData } from "./api";
import type { ExpenseData } from "./interface";
import { generateExpenseChartData } from "./expense";
import { getMonthFromId } from "./utils";
async function renderDomChart(apiUrl:string) {
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
}
async function init() {
  const initApiUrl = "/jan.json";
  await renderDomChart(initApiUrl);
  const janButton = document.querySelector("#btn-jan") as HTMLButtonElement;
  const febButton = document.querySelector("#btn-feb") as HTMLButtonElement;
  await implementShowChartOnButton(janButton);
  await implementShowChartOnButton(febButton);
}
document.addEventListener("DOMContentLoaded",init)


async function implementShowChartOnButton(button:HTMLButtonElement):Promise<void>{
  button.addEventListener("click", ()=>{
    console.log("click");
    const buttonId = button.id;
    try{
      const month = getMonthFromId(buttonId);
      console.log(month);
      const apiUrl = `/${month}.json`;
      renderDomChart(apiUrl);
    }
    catch(error){
      console.error("monthが取得できませんでした");
    }
  })
}