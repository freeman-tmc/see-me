import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    data: [],
    formValues: {
        nameInputValue: '',
        emailInputValue: '',
        ageInputValue: ''
    },
    searchData: {
        searchField: 'name',
        searchValue: ''
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load users':
            return action.payload;
        case 'search':
            return action.payload;
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
            return { ...state, formValues: { nameInputValue: '', emailInputValue: '', ageInputValue: '' } };
        default:
            return state;
    }
}

const modalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'show modal':
            return { ...state, showModal: true, modalContent: action.payload };
        case 'close modal':
            return { ...state, showModal: false, modalContent: action.payload };
        default:
            return state;
    }
}

const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'search field':
            return { ...state, searchField: action.payload };
        case 'search value':
            return { ...state, searchValue: action.payload };
        default:
            return state;
    }
}

// combining all reducers
const allReducers = combineReducers({
    data: usersReducer,
    formValues: formReducer,
    modalData: modalReducer,
    searchData: searchReducer
})


const middlewares = [thunk];

// creating store
const store = createStore(allReducers, initialState, applyMiddleware(...middlewares));

export default store;