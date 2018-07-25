import getUsers from '../services/getUsers';

const getUsersAction = () => dispatch => {
    const url = 'http://localhost:3001/api';
    getUsers(url)
        .then(data => {
            dispatch({
                type: 'load users',
                payload: data
            })
        })
}

export default getUsersAction;