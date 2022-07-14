import Expense from "./component/Expenses/Expense";
import NewExpense from "./component/NewExpense/NewExpense";
import type { ExpenseItemProps } from "./component/Expenses/ExpenseItem";
import { useState } from "react";
function App() {
  const expenseArr: ExpenseItemProps[] = [
    { id: "1", title: "new disk", amount: "450", date: new Date(2022, 4, 30) },
    { id: "2", title: "new money", amount: "550", date: new Date(2022, 4, 30) },
    {
      id: "3",
      title: "new content",
      amount: "650",
      date: new Date(2022, 4, 30),
    },
    { id: "4", title: "new mouse", amount: "750", date: new Date(2022, 4, 30) },
  ];
  const [expenseAr, setExpenseArr] = useState(expenseArr);

  const addExpenseHandler = (expense: ExpenseItemProps) => {
    setExpenseArr((preVal) => {
      return [...preVal, expense];
    });
  };

  return (
    <div>
      <header>
        <NewExpense onAddExpenseHandler={addExpenseHandler} />
        <Expense expenseArr={expenseAr} />
      </header>
    </div>
  );
}

export default App;
