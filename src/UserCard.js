import React from 'react';

const UserCard = props => {
    
    return (
        <div className="user">
            <div className="image-box">
                <img src={props.picture} alt=""/>
            </div>
            <div className="info-box">
                <p className="user-name">{props.name}</p>
                <p className="user-email">{props.email}</p>
                <p className="user-age">{props.age}</p>
            </div>
        </div>
    )
    
}

export default UserCard;