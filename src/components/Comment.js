import React from 'react';
import { connect } from 'react-redux';
import { deleteCommentByID} from '../actions/actions.js';

class Comment extends React.Component{
	deleteComment = (commentID) => {
  		this.props.dispatch(deleteCommentByID(commentID))
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
					      		<i className="fa fa-caret-up" />
					      	  	 {this.props.comment.voteScore}
					      	  	<i className="fa fa-caret-down" />
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