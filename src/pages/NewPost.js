import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { createNewPost, getAllCategories } from '../actions/actions.js';

class NewPost extends React.Component{
	state = {
		title: '',
		category: '',
		author: '',
		details: ''
	}
	componentDidMount(){
		this.props.dispatch(getAllCategories())
	}
	handleChange = (e) =>{
		this.setState({[e.target.id]: e.target.value})
	}
	sendRequest = () =>{
		if(this.state.title.length > 0 
			&& this.state.category.length > 0 
			&& this.state.author.length > 0
			&& this.state.details.length > 0
		){
			this.props.dispatch(
				createNewPost(this.stringifyPost())
			)
		}
	}
	stringifyPost(){
		return JSON.stringify({
        title: this.state.title, 
        id: Math.random().toString(36).substr(-8), 
        timestamp: Date.now(),
        category: this.state.category, 
        author: this.state.author,
        body: this.state.details
      })
	}
	render(){
		return(
			<div className="App">
				<Header />
				<main className="container">
					<section className="new-post">
						<div className="new-post__text">
							<label>Title for your post:</label>
							<input 
							className="new-post__input" 
							id="title"
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

						<div className="new-post__text">
							<label>Your Name or Nickname:</label>
							<input 
							id="author"
							className="new-post__input" 
							onChange={this.handleChange}
							/>
						</div>

						<div className="new-post__category">
							<span className="new-post__category__title">Category:</span>
							{ this.props.categories 
								? this.props.categories.map(
									(cat, key) => 
									<fieldset>
										<input 
											className="new-post__category__radio"
											type="radio" 
											id="category"
											key={key}
											name="category" 
											value={cat.name}
											onChange={this.handleChange}
										/>	
										<label htmlFor="fic">{cat.name}</label>
									</fieldset>
								)
								: null
							}
						</div>

						<div className="new-post__buttons">
							<button onClick={this.sendRequest} className="button button--submit">
								Post
							</button>
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
  return state.categories
}

export default connect(mapStateToProps)(NewPost)