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
							<label for="fic">Fic</label>
							<input 
								className="new-post__category__radio"
								type="radio" 
								checked 
								name="category" 
								value="fic" 
							/>	
							<label for="non-fic">Non-Fic</label>
							<input 
								className="new-post__category__radio"
								type="radio" 
								name="category" 
								value="non-fic" 
							/>
						</div>

						<div className="new-post__buttons">
							<button className="button button--cancel">Cancelar</button>
							<button className="button button--submit">Postar</button>
						</div>					
					</section>
				</main>
			</div>
		)
	}
}
export default NewPost