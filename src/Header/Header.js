import React, { useState } from "react";
import style from "./Header.module.css";
import meals from "./../assets/meals.jpg";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Cart from "../Meal/Cart/Cart";

const Header = () => {

    const [showCart, setShowCart] = useState(false);

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
        <Button type="button" name="Your Cart" icon="true" badge={10} onButtonClicked={toggleCartModal}/>
      </div>
      <div className={style["main-image"]}>
        <img src={meals} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
