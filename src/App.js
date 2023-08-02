import React, { useState } from "react";
import Header from "./Header/Header";
import MealList from "./Meal/MealList/MealList";
import MealsSummary from "./Meal/MealSummary/MealSummary";
import CartContext from "./state/cart-context";

function App() {
  return (
    <CartContext.Provider value={{}}>
      <Header />
      <MealsSummary />
      <MealList />
      </CartContext.Provider>
  );
}

export default App;
