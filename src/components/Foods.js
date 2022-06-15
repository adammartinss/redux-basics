import React from 'react';
import { useSelector } from 'react-redux';

function Foods() {
    const foods = useSelector((state) => state.foodListReducer.foods);
    return (
        <div className="lists">
            <h2>Food Lists</h2>
            {foods.map((item, id) => (
                <div key={id} className="list__item">
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
}

export default Foods;
