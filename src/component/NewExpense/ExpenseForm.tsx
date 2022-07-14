import { useState } from "react";
import "./ExpenseForm.css";
import type { ExpenseItemProps } from "../Expenses/ExpenseItem";

type ExpenseFormProps = {
  onSaveExpenseData: (expenseData: ExpenseItemProps) => void;
};

function ExpenseForm(props: ExpenseFormProps) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const { enteredAmount, enteredDate, enteredTitle } = userInput;

  const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.value;
    setUserInput((previousVal) => {
      return {
        ...previousVal,
        enteredTitle: newVal,
      };
    });
  };

  const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.value;
    setUserInput((previousVal) => {
      return {
        ...previousVal,
        enteredAmount: newVal,
      };
    });
  };

  const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newVal = e.currentTarget.value;

    setUserInput((previousVal) => {
      return {
        ...previousVal,
        enteredDate: newVal,
      };
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        <button>Click</button>
      </form>
    </div>
  );
}
export default ExpenseForm;
