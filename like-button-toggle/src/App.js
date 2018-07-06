import React, { Component } from 'react';
import LikeButton from './LikeButton';
import './App.css';

export default class App extends Component {
  state = {
    userImg: 'https://avatars0.githubusercontent.com/u/33213505?s=460&v=4',
    userAlt: "Karl Secco's GitHub profile picture",
    isLiked: false
  };

  render() {
    return (
      <div className="app-container">
        <img className="user-img" src={this.state.userImg} alt={this.state.userAlt} />
        <LikeButton isLiked={this.state.isLiked} />
      </div>
    );
  }
}
