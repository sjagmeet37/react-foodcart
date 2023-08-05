import { useContext } from "react";
import MealForm from "../MealForm/MealForm";
import style from "./MealItem.module.css";
import CartContext from "../../state/cart-context";

const MealItem = (props) => {

  return (
    <li  key={props.id} className={style.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>${props.price}</div>
      </div>
      <MealForm />
    </li>
  );
};

export default MealItem;
