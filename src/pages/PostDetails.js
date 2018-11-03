import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Aside from '../components/Aside';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/actions.js';

class PostDetails extends React.Component{
	componentDidMount(){
      this.props.dispatch(getAllPosts())
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
						<section className="comments">
							<p className="comment">
								Did you know that 
							</p>
							<p className="comment-timestamp">
								10/09/2018
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
						<section className="comments">
							<p className="comment">
								Also the fact 
							</p>
							<p className="comment-timestamp">
								12/09/2018
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
					</main>
				
				: null
			}
			</div>
			)
	}
}

function mapStateToProps(state){
  return state.posts
}

export default connect(mapStateToProps)(PostDetails)