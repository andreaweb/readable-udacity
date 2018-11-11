import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';
import { connect } from 'react-redux';
import { getPost, getCommentsFromPost } from '../actions/actions.js';

class PostDetails extends React.Component{
	componentDidMount(){
		this.id = this.props.location.pathname.replace('/post-details/', '')
		console.log(this.id)
		this.props.dispatch(getPost(this.id))
		this.props.dispatch(getCommentsFromPost(this.id))
  	}
	render(){
		return(
			<div className="App">
			<Header />
			{this.props.post
				?
					<main className="container container--main">
						<Aside page="post-details" />
						<section className="post-details">
							<h2 className="post-details__name">
								{this.props.post.title}
							</h2>
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
								<p className="votes">
									{this.props.post.voteScore}
								</p>
								<i className="fa fa-caret-down" />
							</div>
							<div className="post-details__post">
								<p className="post-details__body">
									{this.props.post.body}
								</p>
								<span>
								  <em><b>By: </b></em>
							      {this.props.post.author},  
							      <em><b> Posted At: </b></em>
		              				{new Date(this.props.post.timestamp).toLocaleString("en-US", {
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
						this.props.comments.map(
							(comment, key) =>
						<section className="comments">
							<p className="comment">
								{comment.body}
							</p>
							<div>
								<p className="comment-details">
									<em><b>By: </b></em>
									<span className="comment-detail">
							       		{comment.author}, 
							       	</span> 
								    <span className="comment-detail">
								    	<em><b> Posted At: </b></em>
								    </span>
								    <span className="comment-detail">
			              				{new Date(comment.timestamp).toLocaleString("en-US", {
							              "day": "numeric",
							              "hour":"numeric",
							              "minute":"numeric",
							              "month":"short",
							              "year":"numeric"
							      		})}
						      		</span>
		              			</p>
							</div>
							<section className="comment-buttons">
								<button className="button button--small button--edit">
									<i className="fa fa-pencil" />
									Edit
								</button>
								<button className="button button--small button-delete">
									<i className="fa fa-trash" />
									Delete
								</button>
								<span className="comment-votes">
						      		<i className="fa fa-caret-up" />
						      	  	 {comment.voteScore}
						      	  	<i className="fa fa-caret-down" />
					      	  	</span>
				      	  	</section>
						</section>
						)
						: null
					}
					</main>
				: null
			}
			</div>
		)
	}
}

function mapStateToProps(state){
	const { post } = state.post
	const { comments } = state.comments
	return { post, comments}
}

export default connect(mapStateToProps)(PostDetails)