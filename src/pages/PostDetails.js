import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Comment from '../components/Comment';
import { connect } from 'react-redux';
import { addNewComment,
		deletePost, 
		editCommentByID,
		votePostByID,
		getPost, 
		getCommentsFromPost } 
from '../actions/actions.js';

class PostDetails extends React.Component{
	state = {
		isModalOpen: false,
		author: '',
		body: '',
		comment: null
	}
	resetState = () => {
		this.setState({
			author: '',
			body: '',
			comment: null
		})
	}
	componentDidMount(){
	this.id = this.props.location.pathname.replace(/[/][a-z-]+[/]/, '')
	this.props.dispatch(getPost(this.id))
	this.props.dispatch(getCommentsFromPost(this.id))
	}
	deletePost = () => {
		this.props.dispatch(deletePost(this.id));
		this.props.history.push(`/`);
	}
	handleChange = (e) => {
		this.setState({[e.target.id]: e.target.value})
	}
	openModal = (commentID) => {
		if(typeof commentID === 'string'){
			let findComment = this.props.comments.find((comment) => comment.id === commentID) 
			this.setState({
				author: findComment.author,
				body: findComment.body,
				comment: commentID
			})
		}
		this.setState({isModalOpen: true})
	}
	closeModal = () => {
		this.setState({isModalOpen: false})
		this.resetState();
	}
	upvote = (postID) => {
		this.props.dispatch(votePostByID(postID, 'upVote'))
	}
	downvote = (postID) => {
		this.props.dispatch(votePostByID(postID, 'downVote'))
	}
	editComment = (commentID) => {
		this.props.dispatch(editCommentByID(commentID, this.state.body))
		this.closeModal();
	}
	addComment = () => {
		let comment = {
  		body: this.state.body,
        id: Math.random().toString(36).substr(-8),
        timestamp: Date.now(),
        author: this.state.author,
        parentId: this.id 
    }
		if(this.props.dispatch(addNewComment(comment))){
			this.closeModal();
		}else{
			alert('your new comment didnt work')
		}
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
								disabled={this.state.comment ? true : false}
								id="author"
								className="new-post__input"
								value={this.state.author} 
								onChange={this.handleChange}
							/>
						</div>
						<div className="new-post__details">
							<label>Details:</label>
							<textarea 
								id="body"
								onChange={this.handleChange}
								value={this.state.body}
								className="new-post__textarea" 
							/>
						</div>
						<div className="new-post__buttons">
							<button 
								className="button" 
								onClick={this.state.comment 
									? () => this.editComment(this.state.comment)
									: this.addComment }
							>
								{this.state.comment ? 'Edit' : 'Comment'}
							</button>
							<button className="button" onClick={this.closeModal}>
								Cancel
							</button>
						</div>
					</section>
				</div>
				<Header />
				{this.props.post &&
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
							<i className="fa fa-caret-up" onClick={() => this.upvote(this.props.post.id)} />
							<p className="votes">
								{this.props.post.voteScore}
							</p>
							<i className="fa fa-caret-down" onClick={() => this.downvote(this.props.post.id)} />
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
					      	})},
        				<em><b> Commented:</b> {this.props.post.commentCount} times</em>
	            </span>
						</div>
					</section>
					<section className="comments">
						<button className="button button--small" onClick={this.openModal}>
							Add a new comment
						</button>
						{this.props.comments &&	this.props.comments.map(
							(comment, key) =>
							<Comment 
								comment={comment} 
								key={comment.id} 
								openModal={() => this.openModal(comment.id)}
							/>
						)
						}
					</section>
				</main>
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