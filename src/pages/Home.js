import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  componentDidMount(){
     // id - UUID should be fine, but any unique id will work
     //    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
     //    title - String
     //    body - String
     //    author - String
     //    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <Aside page="home"/>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    );
  }
}

export default Home;
