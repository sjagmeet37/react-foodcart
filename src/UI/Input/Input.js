import { useState } from "react";
import style from "./Input.module.css"

const Input = (props) => {
    return (
        <div className={style.input}>
         <label> {props.label}</label>   
        <input 
            type={props.type}
            value={props.value}
            min="1" 
            step="1"
            defaultValue="1"
            />
        </div>

    );
}

export default Input;
