'use strict';

import React, { Component } from 'react';

export default class List extends Component {

  state = {
    data: this.props.data || []
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <h2>ReactList</h2>
        <div className="list">
        {
          data.map((item, idx) => {
            return (
              <a key={idx} className="item" href={item.url}>
                <img src={item.img} className="itemImg" />
                <p className="itemTitle">{item.title}</p>
                <p className="itemPrice">
                  <span>price: {item.price}</span>
                </p>
              </a>
            );
          })
        }
        </div>
      </div>
    );
  }
}
