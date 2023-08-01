import MealForm from "../MealForm/MealForm";
import style from "./MealItem.module.css";

const MealItem = (props) => {

  const onFormSubmit = (event) => {
    console.log(props.id);
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
