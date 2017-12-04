import React, { Component } from 'react';
import { connect } from 'react-redux';

import './RepoList.css';
import ListComponent from '../ListComponent/ListComponent';
import { addItem } from '../../actions';


class RepoList extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <h2>Repo List</h2>
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

export default connect( mapStateToProps, {addItem} )(RepoList);
