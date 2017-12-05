import React, { Component } from 'react';
import './Single.css';

class Single extends Component {
  constructor(){
    super();
    this.state = {
      arr: []
    }
  }

  componentDidMount(){
    const params = this.props.params.id;

    const url = `https://api.github.com/repos/defunkt/${params}/contributors`;
    fetch(url, {method: 'GET'})
      .then(raw => raw.json())
      .then(json => this.setState({arr: json}))
      
  }
  render() {
    return (
      <div className="single container">
      <h2>Contributors page of the 
        <span className="single__projectName">{this.props.params.id}</span>
        project
      </h2>
        {
          this.state.arr.map((item, index) => {
            return(
              <div className="listItem" key={item.id}>
                <div className="listItem__content">
                  <span className="listItem__number">{index + 1}</span>
                  
                  <div className="listItem__autorInfo">
                    <img alt={item.login} className="listItem__img" src={item.avatar_url} />
                    <span>{item.login}</span>
                  </div>
                </div>
                
                <a target="_blank" href={item.html_url}>link</a>

              </div>
            )
          })
        }
      </div>
    );
  }
}


export default Single;
