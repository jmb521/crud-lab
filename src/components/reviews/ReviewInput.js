import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      text: "", 
      restaurantId: props.restaurant.id
    }
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.text} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
