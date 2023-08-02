import style from "./Button.module.css";
import cart from "./../../assets/shopping-cart.png";

const Button = (props) => {
  const onButtonClicked = (event) => {
    props.onButtonClicked();
  };

  const setClick =  {};

  if(props.onButtonClicked) {
    {onClick : props.onButtonClicked}
  }

  return (
    <button type={props.type} className={style.button} {...setClick}>
      {props.icon && <img src={cart} alt="cart" className={style.icon} />}
      {props.name}
      {props.badge && <span className={style.badge}> {props.badge} </span>}
    </button>
  );
};

export default Button;
