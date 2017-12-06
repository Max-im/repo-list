import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RepoList.css';
import ListComponent from '../ListComponent/ListComponent';
import { addItem, sortById, sortByName } from '../../actions';


class RepoList extends Component {
  constructor(){
    super();
    this.state = {
      isSortByName: true
    }
  }
  
  render() {
    return (
      <div className="app">
        <div className="container">
          <h2>Repo List</h2>
          
          <div className="sortBlock">
            <p 
              className={this.state.isSortByName ? "sortBy sortBy_active" : "sortBy"} 
              onClick={() => {
                this.setState({isSortByName: true});
                this.props.sortByName(this.props.state.fetchData);
              }}>
              sort by name
            </p>
            <p 
              className={!this.state.isSortByName ? "sortBy sortBy_active" : "sortBy"}
              onClick={() => {
                this.setState({isSortByName: false});
                this.props.sortById(this.props.state.fetchData);
              }}>
              sort by id
            </p>
          </div>
          
          <ul>
            {
             this.props.state.fetchData.map((item, index) => {
              return(
                <ListComponent 
                  key={item.id}
                  item={item}
                  index={index} 
                  clickHandler={this.props.addItem} 
                />
              )
             }) 
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  
  return {
    state
  }
}

export default connect( mapStateToProps, { addItem, sortById, sortByName} )(RepoList);
