import React, { Component } from 'react';
import './ListComponent.css';


class ListComponent extends Component {
  constructor(){
    super();
    this.state = {
      isSowed: false
    }
  }
  render() {
    const {item, index, clickHandler, fav} = this.props;
    return (
      <li className="listItem" key={item.id}>
          <div className="listItem__content">
            
            <span className="listItem__number">{index + 1}</span>
            
            <div className="listItem__autorInfo">
              <img alt={'s'} className="listItem__img" src={item.owner.avatar_url} />
              <span>{item.owner.login}</span>
            </div>
            
            <h4 className="listItem__title">{item.name}</h4>
            
            <span className="listItem__descr">{item.description}</span>
            
            <a target="_blank" 
              className="listItem__link fa fa-link" 
              href={item.html_url}>
            </a>

          </div>

          <p 
            className={fav ? "fa fa-star listItem__btn listItem__btn_fav" : "fa fa-star-o listItem__btn"}
            onClick={ () =>  clickHandler(item.id) }>
          </p>
        </li>
    );
  }
}

export default ListComponent;
