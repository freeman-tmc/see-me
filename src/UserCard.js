import React from 'react';
import { connect } from 'react-redux';


class UserCard extends React.Component {

    showModal = () => {
        // removes showModalAction property from props and
        // sends only user data to modal
        const { showModalAction, ...rest } = this.props;  
        this.props.showModalAction(rest);
    }

    render() {
    
        return (
            <div className="user" onClick={() => this.props.showModalAction(this.props)}>
                <div className="image-box">
                    <img src={this.props.picture} alt="" />
                </div>
                <div className="info-box">
                    <p className="user-name">{this.props.name}</p>
                    <p className="user-email">{this.props.email}</p>
                    <p className="user-age">{this.props.age}</p>
                </div>
            </div>
        )

    }
}

export default UserCard;

