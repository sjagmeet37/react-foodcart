import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const MealForm = (props) => {

    return (
        <div>
            <Input label="Amount" type="number" />
            <Button type="button" name="+Add" />
        </div>
    );
}

export default MealForm;