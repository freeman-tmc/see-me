import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    data: [],
    formValues: {
        nameInputValue: '',
        emailInputValue: '',
        ageInputValue: ''
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load users':
            return action.payload
            
        default:
            return state;
    }
}


const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'name':
            return { ...state, nameInputValue: action.payload };
        case 'email':
            return { ...state, emailInputValue: action.payload };
        case 'age':
            return { ...state, ageInputValue: action.payload };
        case 'picture':
            return { ...state, pictureInputValue: action.payload };
        case 'new user':
            return { ...state, formValues: {nameInputValue: '', emailInputValue: '', ageInputValue: '' }};
        default:
            return state;
    }
}

// combining all reducers
const allReducers = combineReducers({
    data: usersReducer,
    formValues: formReducer
})


const middlewares = [thunk];

// creating store
const store = createStore(allReducers, initialState, applyMiddleware(...middlewares));

export default store;