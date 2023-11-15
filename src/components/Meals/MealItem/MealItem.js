import classes from './MealItem.module.css';
import Form from './Form';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  
    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
        <Form id={props.id} name={props.name} description={props.description} price={props.price}/>
      </div>
      </li>
    );
  };
  
  export default MealItem;