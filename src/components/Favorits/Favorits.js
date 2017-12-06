import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Favorits.css';
import ListComponent from '../ListComponent/ListComponent';
import { delItem, sortFavByName, sortFavById } from '../../actions';


class Favorits extends Component {
  constructor(){
    super();
    this.state = {
      isSortByName: true
    }
  }

  render() {
    return (
      <div className="favorits">
        <div className="container">
          <h2>Favorit List</h2>
          
          <div className="sortBlock">
            <p 
              className={this.state.isSortByName ? "sortBy sortBy_active" : "sortBy"} 
              onClick={() => {
                this.setState({isSortByName: true});
                this.props.sortFavByName(this.props.state.repoList);
              }}>
              sort by name
            </p>
            <p 
              className={!this.state.isSortByName ? "sortBy sortBy_active" : "sortBy"} 
              onClick={() => {
                this.setState({isSortByName: false});
                this.props.sortFavById(this.props.state.repoList)
              }}>
              sort by id
            </p>
          </div>

          <ul className="listWrapper">
            {
             this.props.state.repoList.map((item, index) => {
              return(
                <ListComponent 
                  key={item.id}
                  item={item}
                  index={index} 
                  fav='true'
                  clickHandler={this.props.delItem} 
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

export default connect(mapStateToProps, { delItem, sortFavByName, sortFavById })(Favorits);
