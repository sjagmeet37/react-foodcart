import React from "react";
import style from "./Header.module.css"
import meals from "./../assets/meals.jpg"
import Button from "../UI/Button/Button";


const Header = () => {

    return (
    <React.Fragment>
    <div className={style.header}>
        <h1>Meals</h1>
        <div><Button type="button" name="Your Cart"
        icon="true" badge={10}/></div>
    </div>
    <div className={style["main-image"]}>
        <img src={meals} alt="Meals"/>
    </div>
    </React.Fragment>);
}

export default Header;