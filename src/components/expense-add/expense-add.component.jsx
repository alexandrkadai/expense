import { useState } from 'react';
import ExpenseForm from '../expense-form/expense-form.component';
import './expense-add.style.scss';

const ExpenseAdd = (props) => {
  const [isOpen, setisOpen] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisOpen(true);
  };
  const windowHandler = () => {
    setisOpen(false);
  };
  const windowCloseHandler = () => {
    setisOpen(true);
  };

  return (
    <div className="new-expense">
      {isOpen && <button onClick={windowHandler}>Add new Expense</button>}
      {!isOpen && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} openState={windowCloseHandler} />
      )}
    </div>
  );
};

export default ExpenseAdd;
