import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';
import { connect } from 'react-redux';
import { getAllPosts, getCommentsFromPost } from '../actions/actions.js';

class PostDetails extends React.Component{
	componentDidMount(){
      this.props.dispatch(getAllPosts())
      //if(this.props.posts.posts){
      	this.props.dispatch(getCommentsFromPost("8xf0y6ziyjabvozdd253nd"))
      //}
  	}
	render(){
		return(
			<div className="App">
			<Header />
			{this.props.posts
				?
					<main className="container container--main">
						<Aside page="post-details" />
						<section className="post-details">
							<h2 className="post-details__name">{this.props.posts[0].title}</h2>
							<section className="post-details__edit">
								<button className="button button--edit">
									<i className="fa fa-pencil" />
									Edit
								</button>
								<button className="button button-delete">
									<i className="fa fa-trash" />
									Delete
								</button>
							</section>
							<div className="post-details__votes">
								<i className="fa fa-caret-up" />
								<p className="votes">{this.props.posts[0].voteScore}</p>
								<i className="fa fa-caret-down" />
							</div>
							<div className="post-details__post">
								<p>{this.props.posts[0].body}</p>
	              				<span>
	              				{this.props.posts[0].author}, 
	              				{new Date(this.props.posts[0].timestamp).toLocaleString("en-US", {
						              "day": "numeric",
						              "hour":"numeric",
						              "minute":"numeric",
						              "month":"short",
						              "year":"numeric"
						      	})}
	              				</span>
							</div>
						</section>
						{this.props.comments
							?
						<section className="comments">
							{this.props.comments[0].voteScore}
							<p className="comment">
								{this.props.comments[0].body}
							</p>
							<p className="comment">
								{this.props.comments[0].author}
							</p>
							<p className="comment-timestamp">
								{this.props.comments[0].timestamp}
							</p>
							<button className="button button--small button--edit">
								<i className="fa fa-pencil" />
								Edit
							</button>
							<button className="button button--small button-delete">
								<i className="fa fa-trash" />
								Delete
							</button>
						</section>
						: null
					}
					</main>
				
				: null
			}
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
//   return 
//   	state.posts, 
//   	state.comments
// }

// const mapStateToProps = state => (
//     (state.posts), (state.comments)
// );

function mapStateToProps(state){
	const { posts } = state.posts
	const { comments } = state.comments
	return { posts, comments}
}

export default connect(mapStateToProps)(PostDetails)