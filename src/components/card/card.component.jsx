import './card.style.scss';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div classname={classes}>{props.children}</div>;
};

export default Card;
