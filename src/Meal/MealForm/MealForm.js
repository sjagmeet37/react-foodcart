import { useRef } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const MealForm = (props) => {

  const itemQuantityRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(itemQuantityRef.current.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
        <Input label="Amount" type="number" inputRef={itemQuantityRef}/>
        <Button type="submit" name="+Add" />
    </form>
  );
};

export default MealForm;
