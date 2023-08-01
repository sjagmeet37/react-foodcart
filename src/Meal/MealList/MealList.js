import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import style from "./MealList.module.css";
import { DUMMY_MEALS } from "./../../assets/MealList";
import { useState } from "react";

const MealList = (props) => {
  const meals = DUMMY_MEALS.map((meal) => {
    return ( 
      <MealItem key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
      />
    );
  });
    


  return (
    <div className={style.meals}>
      <Card>
        <ul>
          {meals}
        </ul>
      </Card>
    </div>
  );
};

export default MealList;
