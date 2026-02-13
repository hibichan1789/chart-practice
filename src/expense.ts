//expense.ts
import type { ChartData } from "chart.js/auto";
import type { ExpenseData } from "./interface";

export function generateExpenseChartData(expenseData:ExpenseData):ChartData<"pie">{
    const label = expenseData.title;
    const expenses = expenseData.expenses;
    const labels = expenses.map(expense => expense.category);
    const data = expenses.map(expense => expense.amount);
    const backgroundColor = expenses.map(expense => expense.color);
    return {
        labels,
        datasets:[{
            label,
            data,
            backgroundColor
        }]
    }
}