import React from "react";
import style from "./Header.module.css"
import meals from "./meals.jpg"


const Header = () => {

    return (
    <React.Fragment>
    <div className={style.header}>
        <div>Meals</div>
        <div>dummy cart</div>
    </div>
    <div className={style["main-image"]}>
        <img src={meals} alt="Meals Photo"/>
    </div>
    </React.Fragment>);
}

export default Header;