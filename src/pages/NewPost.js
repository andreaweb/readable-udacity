import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { bindActionCreators } from 'redux';
import { getPost, editPost, createNewPost } from '../actions/posts.js';
import { getAllCategories } from '../actions/actions.js';

class NewPost extends React.Component{
	state = {
		title: '',
		category: '',
		author: '',
		details: ''
	}
	componentDidMount(){
		this.id = this.props.match.params.id;
		if(this.id){
			this.props.getPost(this.id).then(() => {
				this.setCurrentValues()
			})
		}
		this.props.getAllCategories()
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
				(async () => { 
					const postID = await this.props.editPost(
							this.id,
			        this.state.title, 
			        this.state.details
					)
					if(postID){
						this.props.history.push(`/post-details/${postID}`);
					}else{
						alert("Your post has not been changed :( Try again later")
					}
				})()
			}else{
				(async () => { 
					const newPostID = await this.props.createNewPost(this.stringifyPost())
					if(newPostID){
						this.props.history.push(`/post-details/${newPostID}`);
					}else{
						alert("Oops, something went wrong :(")
					}
				})()
			}
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
							disabled={this.id ? true : false }
							className="new-post__input" 
							onChange={this.handleChange}
							/>
						</div>

						<div className="new-post__category">
							<span className="new-post__category__title">Category:</span>
							{ this.props.categories 
								? this.props.categories.map(
									(cat) => 
									<fieldset key={cat.name}>
										<input 
											className="new-post__category__radio"
											disabled={this.id ? true : false }
											type="radio" 
											id="category"
											checked={cat.name === this.state.category}
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
	return { categories, post }
}

const mapDispatchToProps = dispatch => {
	 return{
	 	...bindActionCreators(
	 		{ 
	 			createNewPost, editPost, getAllCategories, getPost
	 		}
	 		, dispatch
	 	)
	 }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewPost)