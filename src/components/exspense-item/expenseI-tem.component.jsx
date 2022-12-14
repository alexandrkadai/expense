import ExpenseDate from '../expense-date/expense-date.component';
import Card from '../card/card.component';
import './expense-item.style.scss';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}$</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
