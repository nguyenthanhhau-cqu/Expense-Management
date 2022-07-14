import Card from "../UI/Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import type { ExpenseItemProps } from "./ExpenseItem";

type ExpenseProp = {
  expenseArr: ExpenseItemProps[];
};

function Expense({ expenseArr }: ExpenseProp) {
  return (
    <Card className="expenses">
      {expenseArr.map(({ amount, date, title, id }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
}

export default Expense;
