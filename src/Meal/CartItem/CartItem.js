import style from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price}`;
//   const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={style['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={style.summary}>
          <span className={style.price}>{price}</span>
          <span className={style.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={style.actions}>
        <button onClick={props.onItemDecrement}>−</button>
        <button onClick={props.onItemIncrement}>+</button>
      </div>
    </li>
  );
};

export default CartItem;