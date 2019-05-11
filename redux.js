const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    nama: "Muhammad Faisal Affan",
    age: 17
}

// Reducer -> menambah data di store
const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }
        case "CHANGE_VALUE" :
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state;
        break;
    }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription 
store.subscribe(() => {
    console.log('store changes: ', store.getState());
});


// Dispatch Action -> pemanggilan di store
store.dispatch({type: "ADD_AGE"});
store.dispatch({type: "CHANGE_VALUE", newValue: 10});
console.log(store.getState());
