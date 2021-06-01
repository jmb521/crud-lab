import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.reviews.map(review => <li><Review restaurant={this.props.restaurant} review={review} /></li>)}
      </ul>
    );
  }
};

export default Reviews;