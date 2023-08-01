import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import style from "./MealList.module.css";
const MealList = (props) => {
  return (
      <div className={style.meals}>
        <Card>
        <ul>

          <MealItem />
          <MealItem />
          <MealItem />
        </ul>
        </Card>
      </div>
  );
};

export default MealList;
