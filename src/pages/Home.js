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
    // if(this.props.posts <= 0){
    //    console.log('19')
      this.props.dispatch(getAllPosts())
      console.log(this.props)
     
    // }
    // console.log('22')
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <Aside page="home"/>
          { this.props.posts
            ? 
            this.props.posts.map(
              (post, key)=>
              <Post post={post} key={key} />
            )
            : null
          }
          
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.posts
}

export default connect(mapStateToProps)(Home)
