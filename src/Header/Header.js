import React, { useContext, useState } from "react";
import style from "./Header.module.css";
import meals from "./../assets/meals.jpg";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Cart from "../Meal/Cart/Cart";
import CartContext from "../state/cart-context";

const Header = () => {

   const cartCtx = useContext(CartContext);
   const [showCart, setShowCart] = useState(false);
   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
   } ,0);


   const toggleCartModal = () => {
      setShowCart((prevState) => {
        return !prevState;
      });  
    }

  const onCartClicked = () => {
        // setShowModal(true);
  };

  return (
    <React.Fragment>
      {showCart && <Cart toggleCartModal={toggleCartModal} />} 
      <div className={style.header}>
        <h1>Meals</h1>
        <Button type="button" name="Your Cart" icon="true" badge={numberOfCartItems} onButtonClicked={toggleCartModal}/>
      </div>
      <div className={style["main-image"]}>
        <img src={meals} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
