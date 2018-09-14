import getUsers from "../services/getUsers";

export const selectSearchFieldAction = field => dispatch => {
    dispatch({
        type: 'search field',
        payload: field
    })
};

export const searchFieldValueAction = value => dispatch => {
    dispatch({
        type: 'search value',
        payload: value
    })
};

export const searchUsersAction = (searchField, searchValue) => dispatch => {
    const url = `http://localhost:3001/api?${searchField}=${searchValue}`;
    console.log(url);
    
    getUsers(url)
        .then(data => {
            console.log(data);
            
            dispatch({
                type: 'search',
                payload: data
            })
        })
};



