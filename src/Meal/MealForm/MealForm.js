import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const MealForm = (props) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(event);
  };

  return (
    <form onSubmit={onFormSubmit}>
        <Input label="Amount" type="number" />
        <Button type="submit" name="+Add" />
    </form>
  );
};

export default MealForm;
