import User from '../entities/User';

const getUsers = (url) => {
    return fetch(url)
        .then(response => {    
            return response.json();
        })
        .then(data => {
            return data.map(el => {
                return new User(el);
            })
        })
}

export default getUsers;