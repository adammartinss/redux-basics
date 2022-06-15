import React from 'react';
import { useDispatch } from 'react-redux';
import { updateName, addItem, addFood } from '../redux/actions';

function Input() {
    const dispatch = useDispatch();

    //form data state
    const [formData, setFormData] = React.useState({
        name: '',
        item: '',
        food: '',
    });

    //handle change
    const handleChange = (e) => {
        const tempData = {
            ...formData,
            [e.target.name]: e.target.value,
        };
        setFormData(tempData);
    };

    // handle name update
    const handleNameUpdate = () => {
        dispatch(updateName(formData.name));
    };
    // handle name update
    const handleAddItem = () => {
        dispatch(addItem(formData.item));
    };
    const handleAddFood = () => {
        dispatch(addFood(formData.food));
    };
    //TODO, handle add food item function

    return (
        <div className="input">
            <h2>Input</h2>

            <div className="input__field">
                <input onChange={handleChange} name="name" placeholder="name" />
                <button onClick={handleNameUpdate}>Save</button>
            </div>

            <div className="input__field">
                <input onChange={handleChange} name="item" placeholder="item" />
                <button onClick={handleAddItem}>Add</button>
            </div>
            <div className="input__field">
                <input onChange={handleChange} name="food" placeholder="food" />
                <button onClick={handleAddFood}>Food</button>
            </div>

            {/* //TODO HOME WORK create an input field to add food item to food list */}
        </div>
    );
}

export default Input;
