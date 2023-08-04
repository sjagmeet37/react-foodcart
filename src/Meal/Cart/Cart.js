import { useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import style from "./Cart.module.css";
import CartContext from "../../state/cart-context";
import { DUMMY_MEALS } from "../../assets/MealList";

const prepareCartItems = (orderdItems) => {
  let boughtItems = [];
  for (let key in orderdItems) {
    let itemDetail = DUMMY_MEALS.filter((item) => item.id === key);
    itemDetail[0].quantity = orderdItems[key];
    boughtItems.push(itemDetail[0]);
  }
  return boughtItems;
};

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const orderdItemsList = prepareCartItems(ctx);

  const onItemIncrement = (id) => {

  }

  const onItemDecrement = (id) => {
      
  }

  const meals = orderdItemsList.map((element) => {
    return (
      <CartItem
        key={element.id}
        price={element.price}
        name={element.name}
        amount={element.quantity}
        onItemIncrement={onItemIncrement}
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
        <div>$50</div>
      </div>
      <div className={style.actions}>
        <button onClick={onClosePressed}>Close</button>
        <button onClick={onOrderPressed}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
