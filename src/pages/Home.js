import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as API from '../API.js'
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  componentDidMount(){
    console.log(API.getCategories())
    console.log(API.getPostsInCategory('redux'))
    console.log(API.getPosts())
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <Aside page="home"/>
          <Post />
          <Post />
        </main>
      </div>
    );
  }
}

export default Home;
