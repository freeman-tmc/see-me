import React, { Component } from 'react';
import logo from '../logo.svg';
import UserCard from '../UserCard';
import { connect } from 'react-redux';
import getUsersAction from '../actions/getUsersAction';
import { showModalAction } from '../actions/modalAction';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Modal from '../partials/Modal';
import Search from '../partials/Search';

class Home extends Component {

    componentDidMount() { 
        this.props.getUsersAction();
    }

    render() {
    
        return (
            <div className="App">
                <Header searchData={this.props.searchDataAction}/>
                <Search />
                <div className='user-list'>
                    {this.props.data.map((el, i) => {
                        const dd = {...el, showModalAction: this.props.showModalAction};
                        return <UserCard {...dd} key={i} />
                    })}
                </div>
                {this.props.modalData.showModal 
                    ? <Modal {...this.props.modalData.modalContent} />
                    : ''}
                <Footer />
            </div>
        )
    }
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
    getUsersAction: getUsersAction,
    showModalAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



