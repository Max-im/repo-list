import React, { Component } from 'react';
import './ListComponent.css';


class ListComponent extends Component {
  render() {
    const renderList = this.props.data.map((item, index)=>{
      return(
        <li className="listItem" key={index}>
          <span>{item.name}</span>
          <span>{item.descr}</span>
          <a href={item.link}>{item.name}</a>
          <img alt={item.author} src={item.thumbnail} />
          <span>{item.author}</span>
          <button 
            onClick={this.props.clickHandler}
            type="button">+</button>
        </li>
      )
    })
    
    return (
      <ul>
        {renderList}
      </ul>
    );
  }
}

export default ListComponent;
