import React from 'react';
import { connect } from 'react-redux';
import { closeModalAction } from '../actions/modalAction';

const Modal = props => {
 
    return (
        <div id="modal" onClick={props.closeModalAction}>
            <div className="modal-content">
            <div id="close">&times;</div>
                <div className="img-box">
                    <img src={props.picture} alt="" />
                </div>
                <div className="info-box">
                    <p>{props.name}</p>
                    <p>{props.age}</p>
                    <p>{props.email}</p>
                    <p>{props.address}</p>
                    <p>{props.gender}</p>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    closeModalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);