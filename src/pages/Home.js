import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from '../API.js'
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import logo from '../logo.svg';
import { getAllPosts } from '../actions/actions.js';
import '../App.css';

class Home extends Component {
  componentDidMount(){
    // console.log(API.getCategories())
    // console.log(API.getPostsInCategory('redux'))
    // console.log(API.getPosts())
    if(this.props.posts <= 0){
      this.props.dispatch(getAllPosts())
    }
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <Aside page="home"/>
          <Post post={this.props.posts[0]}/>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { posts } = state
  return { posts }
}

export default connect(mapStateToProps)(Home)
