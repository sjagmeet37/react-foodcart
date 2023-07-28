import Input from "../../UI/Input/Input";

const MealForm = (props) => {

    return (
        <div>
           
            <Input label="Amount" type="number"/>
            <button>+Add</button>
        </div>
    );
}

export default MealForm;