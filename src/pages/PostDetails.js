import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';
import { connect } from 'react-redux';
import { addNewComment,
		deletePost, 
		getPost, 
		getCommentsFromPost } 
from '../actions/actions.js';

class PostDetails extends React.Component{
	state = {
		isModalOpen: true
	}
	componentDidMount(){
		this.id = this.props.location.pathname.replace(/[/][a-z-]+[/]/, '')
		console.log(this.id)
		console.log(
			this.props.dispatch(getPost(this.id))
		)
		this.props.dispatch(getCommentsFromPost(this.id))
  	}
  	deletePost = () => {
  		this.props.dispatch(deletePost(this.id))
  	}
  	addComment = () => {
  		let comment = {
	  		body: 'Listening to a Power Metal Collection',
	        id: Math.random().toString(36).substr(-8),
	        timestamp: Date.now(),
	        author: 'vol106',
	        parentId: this.id 
	    }
  		if(this.props.dispatch(addNewComment(comment))){
  			alert("new comment added")
  		}else{
  			alert('your new comment didnt work')
  		}
  	}
  	openModal = () => {
  		this.setState({isModalOpen: true})
  	}
  	closeModal = () => {
  		this.setState({isModalOpen: false})
  	}
	render(){
		return(
			<div className="App">
				<div className={this.state.isModalOpen === true ? 'modal modal--open' : 'modal'}>
					<section className="modal-content">
						<h4>New Comment</h4>
						<div className="new-post__text">
							<label>Your Name or Nickname:</label>
							<input 
							id="author"
							className="new-post__input" 
							onChange={this.handleChange}
							/>
						</div>
						<div className="new-post__details">
							<label>Details:</label>
							<textarea 
							id="details"
							onChange={this.handleChange}
							className="new-post__textarea" 
							/>
						</div>
						<button className="button" onClick={this.closeModal}>
							Cancel
						</button>
					</section>
				</div>
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
							<Link 
								to={`/edit-post/${this.props.post.id}`} 
							>
								<button className="button button--edit">
									<i className="fa fa-pencil" />

										Edit
								</button>
							</Link>
							<button className="button button-delete" onClick={this.deletePost}>
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
					<section className="comments">
						<button className="button button--small" onClick={this.openModal}>
							Add a new comment
						</button>
						{this.props.comments
							?
							this.props.comments.map(
								(comment, key) =>
							<div className="comment">
								<p>
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
				      		</div>
						)
						: null
						}
					</section>
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
	return { post, comments }
}

export default connect(mapStateToProps)(PostDetails)