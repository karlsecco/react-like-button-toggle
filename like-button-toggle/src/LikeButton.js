import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import Spinner from './Spinner';
import './LikeButton.css';

export default class LikeButton extends Component {
  state = {
    isLiked: this.props.isLiked,
    isLoading: false
  };

  /*
  // theoretically, should API exist...

  handleLikeClick = async () => {
    try {

      this.setState({
        isLoading: !this.state.isLoading
      })

      let backendURL = 'api/like';
      let method = this.state.isLiked ? 'DELETE' : 'POST';
      let response = await axios.method(backendURL);

      this.setState({
        isLiked: !this.props.isLiked,
        buttonText: response.data.data.text,
        isLoading: !isLoading
      })
      
    } catch (err) {
      console.log(err);
    }
  };

  */

  handleLikeClick = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });

    // mimicking asynchronous API call/delay...
    setTimeout(() => {
      this.setState({
        isLiked: !this.state.isLiked,
        isLoading: !this.state.isLoading
      });
    }, Math.random() * (3000 - 750) + 750);
  };

  render() {
    let buttonSpecs = this.state.isLiked
      ? {
          text: 'Unlike',
          textColor: 'black',
          background: 'white'
        }
      : {
          text: 'Like!',
          textColor: 'white',
          background: 'darkgreen'
        };

    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <button
        className="like-button"
        onClick={this.handleLikeClick}
        style={{ color: buttonSpecs.textColor, backgroundColor: buttonSpecs.background }}
      >
        {buttonSpecs.text}
      </button>
    );
  }
}

LikeButton.propTypes = {
  isLiked: PropTypes.bool
};
