import { useContext, useRef } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import CartContext from "../../state/cart-context";

const MealForm = (props) => {

  const itemQuantityRef = useRef();

  const cartCtx = useContext(CartContext);

  const onFormSubmit = (event) => {
    event.preventDefault();
    // if (cartItems[props.id]) {
    //   cartItems[props.id] = +cartItems[props.id] + +quantity;
    // } else {
    //   cartItems[props.id] = +quantity;
    // }
    // console.log(cartItems);
  }

  return (
    <form onSubmit={onFormSubmit}>
        <Input label="Amount" type="number" ref={itemQuantityRef}/>
        <Button type="submit" name="+Add" />
    </form>
  );
};

export default MealForm;
