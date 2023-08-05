import React, { useState } from "react";
import style from "./Input.module.css"


//TO-DO try passing all props in a object to make it more configurable
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={style.input}>
         <label> {props.label}</label>   
        <input 
            type={props.type}
            value={props.value}
            min="1" 
            step="1"
            defaultValue="1"
            ref={ref}
            />
        </div>

    );
});

export default Input;
