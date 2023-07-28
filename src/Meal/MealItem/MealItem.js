import MealForm from "../MealForm/MealForm";
import style from "./MealItem.module.css";

const MealItem = () => {
  return (
    <div className={style.meal}>
      <div>
        <h3>Meal Name</h3>
        <div className={style.description}>description</div>
        <div className={style.price}>$20</div>
      </div>
      <MealForm />
    </div>
  );
};

export default MealItem;
