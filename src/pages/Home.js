import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from '../API.js'
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import logo from '../logo.svg';
import {getAllPosts} from '../actions/actions.js';
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
        <Header onClick={this.props} />
        <main className="container container--main">
          <Aside page="home"/>
          <Post />
          <Post />
        </main>
      </div>
    );
  }
}

/*first get categories
function mapStateToProps ({
        categories: { categories }
    }) {
    return {
        categories: categories
    }
}*/

function mapDispatchToProps (dispatch) {
    return {
        getAllPosts: () => dispatch(getAllPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
