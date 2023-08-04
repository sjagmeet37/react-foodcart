import { useContext } from "react";
import MealForm from "../MealForm/MealForm";
import style from "./MealItem.module.css";
import CartContext from "../../state/cart-context";

const MealItem = (props) => {

  const cartItems = useContext(CartContext);

  const onFormSubmit = (quantity) => {

    if (cartItems[props.id]) {
      cartItems[props.id] = +cartItems[props.id] + +quantity;
    } else {
      cartItems[props.id] = +quantity;
    }
    console.log(cartItems);
  }

  return (
    <li  key={props.id} className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>${props.price}</div>
      </div>
      <MealForm onFormSubmit={onFormSubmit} />
    </li>
  );
};

export default MealItem;
