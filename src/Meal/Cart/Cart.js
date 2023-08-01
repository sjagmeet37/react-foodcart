import Modal from "../../UI/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import style from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal>
        <ul className={style["cart-items"]}>
          <CartItem price="40" name="My Food" amount="100" />
          <CartItem price="40" name="My Food" amount="100" />
        </ul>
        <div className={style.total}>
          <div>Total Amount</div>
          <div>$50</div>
        </div>
        <div className={style.actions}>
          <button>Close</button>
          <button>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;
