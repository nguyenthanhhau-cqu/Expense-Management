import React from "react";
import "./ExpenseFilter.css";

interface ExpenseFilterProps {
  onFilterYear: (selectedYear: string) => void;
  onSelectedYear: string;
}

function ExpenseFilter(props: ExpenseFilterProps) {
  const onSelectedYearHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    var selectedValue = event.currentTarget.value;
    props.onFilterYear(selectedValue);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.onSelectedYear} onChange={onSelectedYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
