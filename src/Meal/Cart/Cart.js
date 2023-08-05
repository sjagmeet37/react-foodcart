import { useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import style from "./Cart.module.css";
import CartContext from "../../state/cart-context";
import { DUMMY_MEALS } from "../../assets/MealList";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);


  const onItemIncrement = (id) => {

  }

  const onItemDecrement = (id) => {
      
  } 

  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const meals = cartCtx.items.map((element) => {
    return (
      <CartItem
        key={element.id}
        price={element.price}
        name={element.name}
        amount={element.amount}
        onItemIncrement={onItemIncrement} //use .bind here along with context methods
        onItemDecrement={onItemDecrement}
      />
    );
  });

  const onOrderPressed = () => {
    console.log("ordering");
  };

  const onClosePressed = () => {
    props.toggleCartModal();
  };

  return (
    <Modal>
      <ul className={style["cart-items"]}>{meals}</ul>
      <div className={style.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={style.actions}>
        <button onClick={onClosePressed}>Close</button>
        {hasItems && <button onClick={onOrderPressed}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
