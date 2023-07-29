import React from "react";
import Header from "./Header/Header";
import MealList from "./Meal/MealList/MealList";
import MealsSummary from "./Meal/MealSummary/MealSummary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
      <MealList />
      </React.Fragment>
  );
}

export default App;
