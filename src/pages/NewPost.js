import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getPost, editPost, createNewPost, getAllCategories } from '../actions/actions.js';

class NewPost extends React.Component{
	state = {
		title: '',
		category: '',
		author: '',
		details: ''
	}
	componentDidMount(){
		this.id = this.props.location.pathname.replace(/[/][a-z-]+[/]/, '')
		if(this.id){
			this.props.dispatch(
				getPost(this.id)
			).then(() => {
				this.setCurrentValues()
			})
		}
		this.props.dispatch(getAllCategories())
	}
	setCurrentValues = () => {
		this.setState({
			title: this.props.post.title,
			category: this.props.post.category,
			author: this.props.post.author,
			details: this.props.post.body
		})
	}
	handleChange = (e) =>{
		this.setState({[e.target.id]: e.target.value})
	}
	sendRequest = () => {
		if(this.state.title.length > 0 
			&& this.state.category.length > 0 
			&& this.state.author.length > 0
			&& this.state.details.length > 0
		){
			if(this.id){			    
				if(
					this.props.dispatch(
						editPost(
							this.id,
					        this.state.title, 
					        this.state.details
						)
					)
				){
					alert("Post successfully edited! Woohoo!")
				}else{
					alert("Your post has not been changed :( Try again later")
				}
			}else{
				if(
					this.props.dispatch(
						createNewPost(this.stringifyPost())
					)
				){
					alert("Post created! Yay!")
				}else{
					alert("Oops, something went wrong :(")
				}
			}
		//replace alerts by something more visually aesthetic 
		}else{
			alert('You have not filled all necessary information!')
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
							value={this.state.title}
							onChange={this.handleChange}
							/>
						</div>

						<div className="new-post__details">
							<label>Details:</label>
							<textarea 
							id="details"
							value={this.state.details}
							onChange={this.handleChange}
							className="new-post__textarea" 
							/>
						</div>

						<div className="new-post__text">
							<label>Your Name or Nickname:</label>
							<input 
							id="author"
							value={this.state.author}
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
								{this.id ? 'Edit' : 'Post' }
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
	const { categories } = state.categories
	const { post } = state.post
	const { response } = state.response
	return { categories, post, response }
}

export default connect(mapStateToProps)(NewPost)