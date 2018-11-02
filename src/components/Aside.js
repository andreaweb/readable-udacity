import React from 'react'
import { getAllPosts } from '../actions/actions.js';
import { connect } from 'react-redux';

const Aside = props => (
	<aside className="aside">
		<button className="button button--new">
		New Post
		</button>
		{
			props.page === 'post-details'
			?
			<ul className="categories">
				<li className="categories__title">Current Category:</li>
				<li>Fic</li>
			</ul>
			:
			<section>
				<div className="order-by">
	              <label className="order-by__label">
	                Order By
	              </label>
	              <select className="order-by__select">
	                <option>Date</option>
	                <option>Votes</option>
	              </select>
	            </div>
	            <ul className="categories">
	              <li className="categories__title">Categories</li>
	              <li>{props.posts[0] ? props.posts[0].voteScore : null}</li>
	              <li>Non-Fic</li>
	            </ul>
	        </section>
		}
		
	</aside>
)
function componentDidMount(){
    // console.log(API.getCategories())
    // console.log(API.getPostsInCategory('redux'))
    // console.log(API.getPosts())
    if(this.props.posts <= 0){
      this.props.dispatch(getAllPosts())
    }
    console.log(this.props)
  }
function mapStateToProps(state){
  const { posts } = state
  return { posts }
}

export default connect(mapStateToProps)(Aside)
