import { useState } from 'react';
import Card from '../card/card.component';

import ExpensesFilter from '../expense-filter/expense-filter.component';
import ExpensesList from '../expenses-list/expenses-list.component';
import './expense-container.style.scss';

const ExpenseContainer = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('2022');
  const selectedFilterDate = (filterdata) => {
    setSelectedFilter(filterdata);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onAddFilter={selectedFilterDate} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseContainer;
