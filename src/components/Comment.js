import React from 'react';
import { addNewComment,deleteCommentByID} from '../actions/actions.js';

export default class Comment extends React.Component{
	state = {
		body: '',
		author: ''
	}
	addComment = () => {
  		let comment = {
	  		body: this.state.body,
	        id: Math.random().toString(36).substr(-8),
	        timestamp: Date.now(),
	        author: this.state.author,
	        parentId: this.id 
	    }
	    console.log(this.id, comment.parentId)
  		if(this.props.dispatch(addNewComment(comment))){
  			alert("new comment added")
  		}else{
  			alert('your new comment didnt work')
  		}
  	}
	deleteComment = (commentID) => {
  		this.props.dispatch(deleteCommentByID(commentID))
  	}
  	handleChange = (e) => {
  		this.setState({[e.target.id]: e.target.value})
  	}
	render(){
			return (
						<div className="comment">
							<p>
								{this.props.comment.body}
							</p>
							<div>
								<p className="comment-details">
									<em><b>By: </b></em>
									<span className="comment-detail">
							       		{this.props.comment.author}, 
							       	</span> 
								    <span className="comment-detail">
								    	<em><b> Posted At: </b></em>
								    </span>
								    <span className="comment-detail">
			              				{new Date(this.props.comment.timestamp).toLocaleString("en-US", {
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
								<button 
									className="button button--small button--edit"
									onClick={this.openModal}
								>
									<i className="fa fa-pencil" />
									Edit
								</button>
								<button 
									className="button button--small button-delete"
									onClick={() => this.deleteComment(this.props.comment.id)}
								>
									<i className="fa fa-trash" />
									Delete
								</button>
								<span className="comment-votes">
						      		<i className="fa fa-caret-up" />
						      	  	 {this.props.comment.voteScore}
						      	  	<i className="fa fa-caret-down" />
					      	  	</span>
				      	  	</section>
				      	</div>
				    )
	}
}