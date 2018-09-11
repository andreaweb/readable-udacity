import React from 'react';
import {Link} from 'react-router-dom';

class NewPost extends React.Component{
	render(){
		return(
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">
						Read.It
						<span className="description">
						A project for Udacity's React Nanodegree
						</span>
					</h1>
				</header>
				<main>
					<section className="new-post">
						<label>Title for your post:</label>
						<input className="new-post__title" />
						<label>Details:</label>
						<textarea className="new-post__details" />
						<span>Category:</span>
						<label>Fic</label>
						<input type="radio" name="category" value="fic" />	
						<label>Non-Fic</label>
						<input type="radio" name="category" value="non-fic" />						
					</section>
				</main>
			</div>
		)
	}
}
export default NewPost