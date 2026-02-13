//interface.ts
interface Expense{
    category:string;
    amount:number;
    color:string;
}

export interface ExpenseData{
    title:string;
    expenses:Expense[];
}