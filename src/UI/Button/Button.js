import style from "./Button.module.css";
import cart from "./../../assets/shopping-cart.png";

const Button = (props) => {

    const onButtonClicked = (event) => {
    if(props.onButtonClicked) {
        props.onButtonClicked();
      }    
  };

  const setClick =  {};


  return (
    <button type={props.type} className={style.button} onClick={onButtonClicked}>
      {props.icon && <img src={cart} alt="cart" className={style.icon} />}
      {props.name}
      {(props.badge || props.badge >= -1) && <span className={style.badge}> {props.badge} </span>}
    </button>
  );
};

export default Button;
