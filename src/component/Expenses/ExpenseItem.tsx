import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
export type ExpenseItemProps = {
  id?: string;
  title: string;
  date: Date;
  amount: string;
};

function ExpenseItem(props: ExpenseItemProps) {
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </div>
  );
}

export default ExpenseItem;
