import React, { Component } from 'react';
import { Link } from 'react-router';

import './ListComponent.css';



class ListComponent extends Component {
  render() {
    const {item, index, clickHandler, fav} = this.props;
    return (
      <li className="listContent" key={item.id}>
        <div className="listItem">
          <div className="listItem__content">
            
            <span className="listItem__number">{index + 1}</span>
            
            <div className="listItem__autorInfo">
              <img alt={item.owner.login} className="listItem__img" src={item.owner.avatar_url} />
              <span>{item.owner.login}</span>
            </div>
            
            <h4 className="listItem__title">{item.name}</h4>
            
            <span className="listItem__descr">{item.description}</span>
            
            <a target="_blank" 
              className="listItem__link fa fa-link" 
              href={item.html_url}>
            </a>
            
            <Link
              to={'repoList/single/'+item.name} 
              className="fa fa-users listItem__contributersBtn"> 
            </Link>

          </div>

          <p 
            className={fav ? "fa fa-star listItem__btn listItem__btn_fav" : "fa fa-star-o listItem__btn"}
            onClick={ () =>  clickHandler(item.id) }>
          </p>
        </div>



      </li>
    );
  }
}

export default ListComponent;
