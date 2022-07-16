import Card from "../UI/Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import type { ExpenseItemProps } from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

type ExpenseProp = {
  expenseArr: ExpenseItemProps[];
};

function Expense({ expenseArr }: ExpenseProp) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterYearChangeHandler = (selectedYear: string) => {
    setSelectedYear(selectedYear);
  };
  const filteredExpenseArr = expenseArr.filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedYear={selectedYear}
        onFilterYear={filterYearChangeHandler}
      />
      {filteredExpenseArr.map(({ amount, date, title, id }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
}

export default Expense;
