import { useState } from 'react';
import Card from '../card/card.component';
import ExpenseItem from '../exspense-item/expenseI-tem.component';
import ExpensesFilter from '../expense-filter/expense-filter.component';
import './expense-container.style.scss';

const ExpnseContainer = (props) => {
  const [selectedFilter, setSelectedFilter] = useState('2022');
  const selectedFilterDate = (filterdata) => {
    setSelectedFilter(filterdata);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onAddFilter={selectedFilterDate} />
      <ExpenseItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      />
    </Card>
  );
};

export default ExpnseContainer;
