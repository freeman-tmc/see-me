import React, { Component } from 'react';
import { connect } from 'react-redux';
import inputChangeAction from '../actions/inputChangeAction';
import resetFormAction from '../actions/resetFormAction';

class CreateUser extends Component {

    submitData = () => {
        const name = this.props.formValues.nameInputValue;
        const email = this.props.formValues.emailInputValue;
        const age = this.props.formValues.ageInputValue;
        const picture = this.props.formValues.pictureInputValue;
        if (name !== '' && email !== '' && age !== '') {
            console.log(name, email);
            
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    email,
                    age,
                    picture
                })
            };
            fetch('http://localhost:3001/api', options)
                .then(response => {
                    this.props.resetFormAction();
                    this.props.history.push('/');
                })
        }
    }

    handleChange = (event) => {
        this.props.inputChangeAction(event.target.name, event.target.value);
    }

    render() {

        return (
            <div>
                <h1>Enter your data</h1>
                <div>
                    <input name="name" type="text" value={this.props.nameInputValue} placeholder="Name" onChange={this.handleChange} />
                    <input name="email" type="email" value={this.props.emailInputValue} placeholder="Email" onChange={this.handleChange} />
                    <input name="age" type="number" value={this.props.ageInputValue} placeholder="Age" onChange={this.handleChange} />
                    <input name="picture" type="text" value={this.props.pictureInputValue} placeholder="Age" onChange={this.handleChange} />
                    <button onClick={this.submitData}>Submit</button>
                </div>
            </div>
        )

    }
}

const matStateToProps = state => ({ ...state });
const mapDispatchToProps = {
    inputChangeAction,
    resetFormAction
}

export default connect(matStateToProps, mapDispatchToProps)(CreateUser);