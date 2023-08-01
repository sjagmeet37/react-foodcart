import React from "react";
import Header from "./Header/Header";
import MealList from "./Meal/MealList/MealList";
import MealsSummary from "./Meal/MealSummary/MealSummary";
import Cart from "./Meal/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <MealsSummary />
      <MealList />
      </React.Fragment>
  );
}

export default App;
