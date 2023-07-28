import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const MealList = (props) => {

    return (
        <Card>
            <MealItem />
            <MealItem />
            <MealItem />
        </Card>
    );
}

export default MealList;