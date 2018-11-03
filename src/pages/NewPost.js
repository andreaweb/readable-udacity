import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { createNewPost } from '../actions/actions.js';

class NewPost extends React.Component{
	state = {
		title: '',
		category: '',
		author: ''
	}
	componentDidMount(){
		// this.props.dispatch(
		// 	createNewPost(this.stringifyPost())
		// )
	}
	stringifyPost(){
		return JSON.stringify({
        title: this.state.title, 
        id: Math.random().toString(36).substr(-8), 
        timestamp: Date.now(),
        category: this.state.category, 
        author: this.state.author
      })
	}
	render(){
		return(
			<div className="App">
				<Header />
				<main className="container">
					<section className="new-post">
						<div className="new-post__title">
							<label>Title for your post:</label>
							<input className="new-post__input" />
						</div>

						<div className="new-post__details">
							<label>Details:</label>
							<textarea className="new-post__textarea" />
						</div>

						<div className="new-post__category">
							<span className="new-post__category__title">Category:</span>
							
							<input 
								className="new-post__category__radio"
								type="radio" 
								checked 
								name="category" 
								value="fic" 
							/>	
							<label for="fic">Fic</label>
							
							<input 
								className="new-post__category__radio"
								type="radio" 
								name="category" 
								value="non-fic" 
							/>
							<label for="non-fic">Non-Fic</label>
						</div>

						<div className="new-post__buttons">
							<button className="button button--submit">Post</button>
							<button className="button button--cancel">
								<Link className="remove-styles-link" to="/">
									Cancel
								</Link>
							</button>			
						</div>					
					</section>
				</main>
			</div>
		)
	}
}

function mapStateToProps(state){
  return state.posts
}

export default connect(mapStateToProps)(NewPost)