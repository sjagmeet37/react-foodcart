import { useContext, useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import CartContext from "../../state/cart-context";

const MealForm = (props) => {

  const itemQuantityRef = useRef();

  const [showError, setError] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const enterredAmount = +itemQuantityRef.current.value;

    if(enterredAmount > 5 || enterredAmount < 0 ) {
        setError(true);
        return;
    }

    setError(false);
    props.onMealItemAdded(enterredAmount);

  }

  return (
    <form onSubmit={onFormSubmit}>
        <Input label="Amount" type="number" ref={itemQuantityRef}/>
        <Button type="submit" name="+Add" />
        {showError && <p>Please enter valid quantity</p>}
    </form>
  );
};

export default MealForm;
