import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import style from "./MealList.module.css";
const MealList = (props) => {
  return (
    <Card>
      <div className={style.meals}>
        <ul>
          <MealItem />
          <MealItem />
          <MealItem />
        </ul>
      </div>
    </Card>
  );
};

export default MealList;
