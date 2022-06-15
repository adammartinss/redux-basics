import { combineReducers } from 'redux';
//name reducer
const nameInitialState = {
    name: 'Adam.',
};
const nameReducer = (state = nameInitialState, action) => {
    console.log('inside name reducer', action);
    switch (action.type) {
        case 'UPDATE_NAME':
            return {
                ...state, //if there's more things than name being updated
                name: action.payload,
            };
        default:
            return state;
    }
};

// list reducer
const listInitialState = {
    lists: ['item1', 'item2'],
};
const listsReducer = (state = listInitialState, action) => {
    console.log('inside list reducer', action);
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                lists: [...state.lists, action.payload],
            };
        default:
            return state;
    }
};
const foodInitialState = {
    foods: [''],
};
const foodListReducer = (state = foodInitialState, action) => {
    console.log('inside food reducer', action)
    switch (action.type) {
        case 'ADD_FOOD':
            return {
                ...state,
                foods: [...state.foods, action.payload],
            };
        default:
            return state;
    }
};
//combine all reducers to one
const rootReducer = combineReducers({
    nameReducer,
    listsReducer,
    foodListReducer,
});

export default rootReducer;
