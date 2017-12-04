import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Favorits.css';
import ListComponent from '../ListComponent/ListComponent';


class Favorits extends Component {
  render() {
    return (
      <div className="favorits">
        <div className="container">
          <h2>Favorit List</h2>
          <ul>
            {
             this.props.state.repoList.map((item, index) => {
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

export default connect(mapStateToProps, null)(Favorits);
