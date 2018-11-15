import React from 'react';
import { connect } from 'react-redux';
import { deleteCommentByID,voteCommentByID} from '../actions/actions.js';

class Comment extends React.Component{
	deleteComment = (commentID) => {
  		this.props.dispatch(deleteCommentByID(commentID))
  	}
  	upvote = (commentID) => {
  		this.props.dispatch(voteCommentByID(commentID, 'upVote'))
  	}
  	downvote = (commentID) => {
  		this.props.dispatch(voteCommentByID(commentID, 'downVote'))
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
								onClick={this.props.openModal}
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
					      		<i 
					      			className="fa fa-caret-up" 
					      			onClick={() => this.upvote(this.props.comment.id)} 
					      		/>
					      	  	 {this.props.comment.voteScore}
					      	  	<i 
					      	  		className="fa fa-caret-down" 
					      	  		onClick={() => this.downvote(this.props.comment.id)} 
					      	  	/>
				      	  	</span>
			      	  	</section>
			      	</div>
				)
	}
}
// function mapStateToProps(state){
// 	const { comments } = state.comments
// 	return { comments }
// }

export default connect()(Comment)