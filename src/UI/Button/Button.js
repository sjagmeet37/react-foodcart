import style from "./Button.module.css";
import cart from "./../../assets/shopping-cart.png";

const Button = (props) => {

  const onButtonClicked = (event) => {
    props.onButtonClicked();
  }
  
  return (
    <button type={props.type} className={style.button} onClick={onButtonClicked}>
        {props.icon && <img src={cart} alt="cart" className={style.icon} />}
      {props.name}
      {props.badge && <span className={style.badge}> {props.badge} </span>}
      
    </button>
  );
};

export default Button;
