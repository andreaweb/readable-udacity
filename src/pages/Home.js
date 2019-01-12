import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import {bindActionCreators} from 'redux';
import { votePostInArr, getAllPosts, deletePost } from '../actions/posts.js';
import '../App.css';

class Home extends Component {
  state = {
    activeFilter: () => true
  }
  upvote = (postID) => {
    this.props.votePostInArr(postID, 'upVote');
  }
  downvote = (postID) => {
    this.props.votePostInArr(postID, 'downVote');
  }
  deletePost = (postID) => {
    this.props.deletePost(postID);
    const filters = [this.state.activeFilter, (post) => post.id !== postID]
    const updateFilters = (v) => filters.every(f => f(v))
    this.setState({activeFilter: updateFilters})
  }
  componentDidMount(){
    this.props.getAllPosts();
    this.filterCategories(null);
    this.sortPosts('date');
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
    if(value === 'date'){
      this.setState({activeSort: (a,b) => b.timestamp - a.timestamp})
    }else{
      this.setState({activeSort: (a,b) => b.voteScore - a.voteScore})
    } 
    this.props.posts &&
      this.props.posts.sort(this.state.activeSort)
      .map((post) => post.category)
  }
  render() {
    return (
      <div className="App">
        <Header removeFilters={() => this.filterCategories(null)} />
        <main className="container container--main">
          <Aside 
            page="home" 
            reload={(category) => this.filterCategories(category)}
            sortBy={(value) => this.sortPosts(value)} 
          />
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
                deletePost={(id) => this.deletePost(id)}
              />
            )
          }  
        </main>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { post } = state.post
  const { posts } = state.posts
  return { post, posts }
}

const mapDispatchToProps = dispatch => {
   return{
    ...bindActionCreators(
      { 
        votePostInArr, getAllPosts, deletePost
      }
      , dispatch
    )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
