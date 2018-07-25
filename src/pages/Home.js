import React, { Component } from 'react';
import logo from '../logo.svg';
import UserCard from '../UserCard';
import { connect } from 'react-redux';
import getUsersAction from '../actions/getUsersAction';

class Home extends Component {

    componentDidMount() {
        console.log('alob');
        
        this.props.getUsersAction();
    }

    render() {
        console.log(this.props);
        
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className='user-list'>
                {this.props.data.map((el, i) => {
                    return <UserCard {...el} key={i} />
                })}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
    getUsersAction: getUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



