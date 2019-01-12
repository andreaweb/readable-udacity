import React, { Component } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import { votePostInArr, getAllPosts, deletePost } from '../actions/posts.js';
import '../App.css';

class NotFound extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <Aside page="home" />
          <h5>Post Not Found</h5>
        </main>
      </div>
    );
  }
}

export default NotFound
