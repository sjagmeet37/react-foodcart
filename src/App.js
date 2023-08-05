import React, { useState } from "react";
import Header from "./Header/Header";
import MealList from "./Meal/MealList/MealList";
import MealsSummary from "./Meal/MealSummary/MealSummary";
import CartContext from "./state/cart-context";
import CartProvider from "./state/CartProvider";

function App() {
  return (
    <CartProvider >
      <Header />
      <MealsSummary />
      <MealList />
      </CartProvider>
  );
}

export default App;
