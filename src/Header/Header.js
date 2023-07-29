import React, { useState } from "react";
import style from "./Header.module.css";
import meals from "./../assets/meals.jpg";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const onCartClicked = () => {
    console.log('*********');
    setShowModal(true);
  };

  return (
    <React.Fragment>
      {showModal && <Modal />}  
      <div className={style.header}>
        <h1>Meals</h1>
        <Button type="button" name="Your Cart" icon="true" badge={10} onButtonClicked={onCartClicked}/>
      </div>
      <div className={style["main-image"]}>
        <img src={meals} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
