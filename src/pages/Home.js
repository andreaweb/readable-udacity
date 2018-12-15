import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from '../API.js'
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import logo from '../logo.svg';
import { votePostByID,getAllPosts } from '../actions/actions.js';
import '../App.css';

class Home extends Component {
  state = {
    activeFilter: () => true
  }
  upvote = (postID) => {
    this.props.dispatch(votePostByID(postID, 'upVote'))
  }
  downvote = (postID) => {
    this.props.dispatch(votePostByID(postID, 'downVote'))
  }
  componentDidMount(){
      this.props.dispatch(getAllPosts())
      this.filterCategories()
      this.sortPosts('date')
      // console.log(
      //   this.props.dispatch(getPost(this.id))
      // )
      // this.props.dispatch(getCommentsFromPost(this.id))
  }
  filterCategories = (category) => {
    if(category){
      this.filter = category
      this.setState({activeFilter: (post) => post.category === this.filter})
    }else{
      this.setState({activeFilter: () => true})
    }
  }
  sortPosts = (value) => {
    console.log(value)
    if(value === 'date'){
      this.setState({activeSort: (a,b) => b.timestamp - a.timestamp})
    }else{
      this.setState({activeSort: (a,b) => a.timestamp - b.timestamp})
    } 
    this.props.posts ?
    //without the filter it doesn't change
    //the filter can be in any order
    console.log(
      this.props.posts.sort(this.state.activeSort)
      .filter(this.state.activeFilter)
      .map((post) => post.category)
    )
    : console.log('waiting')
  }
  render() {
    return (
      <div className="App">
        <Header reload={() => this.filterCategories()} />
        <main className="container container--main">
          <Aside page="home" sortBy={(value) => this.sortPosts(value)} />
          { this.props.posts 
            && this.props.posts
            .filter(this.state.activeFilter)
            .sort(this.state.activeSort)
            .map(
              (post, key)=>
              <Post 
                post={post} 
                key={key} 
                reload={(category) => this.filterCategories(category)} 
                upvote={(id) => this.upvote(id)}
                downvote={(id) => this.downvote(id)}
              />
            )
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
