import React from 'react';
import { connect } from 'react-redux';
import { selectSearchFieldAction, searchFieldValueAction, searchUsersAction } from '../actions/searchAction';
import search_icon from '../img/magnifier-tool.svg';


class Search extends React.Component {

    searchUsers = event => {
        this.props.searchFieldValueAction(event.target.value);
        this.props.searchUsersAction(this.props.searchField, event.target.value);
    }

    selectField = event => {
        this.props.selectSearchFieldAction(event.target.value);
    }

    render() {
        console.log(this.props);
        
        return (
            <div className="search">
                <select name="search-field" value={this.props.searchField} onChange={this.selectField}>
                        <option value="name">Name</option>
                        <option value="age">Age</option>
                        <option value="company">Company</option>
                        <option value="email">Email</option>
                    </select>
                <input type="text" name="search-value" placeholder="Search" value={this.props.searchValue} onChange={this.searchUsers} />
                <div className="icon-box">
                    <img className="icon" src={search_icon} />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        searchField: state.searchData.searchField,
        searchValue: state.searchData.searchValue
    }
};
const mapDispatchToProps = {
    selectSearchFieldAction,
    searchFieldValueAction,
    searchUsersAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);