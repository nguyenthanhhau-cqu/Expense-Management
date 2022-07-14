import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import type { ExpenseItemProps } from "../Expenses/ExpenseItem";

type NewExpenseProps = {
  onAddExpenseHandler: (expense: ExpenseItemProps) => void;
};

function NewExpense(props: NewExpenseProps) {
  const saveExpenseData = (expenseData: ExpenseItemProps) => {
    const newExpenseData: ExpenseItemProps = {
      ...expenseData,
      id: uuidv4(),
    };
    props.onAddExpenseHandler(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpense;
