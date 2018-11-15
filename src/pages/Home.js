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
      this.props.dispatch(getAllPosts())
      this.filterCategories()
      // console.log(
      //   this.props.dispatch(getPost(this.id))
      // )
      // this.props.dispatch(getCommentsFromPost(this.id))
  }
  filterCategories = (category) => {
    if(typeof category === 'string'){
      this.filter = category
    }else{
      this.filter = this.props.location.pathname.replace(/[/][a-z-]+[/]/, '')
    }
      console.log(this.filter)
      this.filter.length > 1
      ? this.activeFilter = (post) => post.category === this.filter 
      : this.activeFilter = () => true
  }
  render() {
    return (
      <div className="App">
        <Header reload={() => this.filterCategories()} />
        <main className="container container--main">
          <Aside page="home"/>
          { this.props.posts
            ? 
            this.props.posts
            .filter(this.activeFilter)
            .map(
              (post, key)=>
              <Post post={post} key={key} reload={(category) => this.filterCategories(category)} />
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
