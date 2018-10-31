import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class NewPost extends React.Component{
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
							<Link to="/">
								<button className="button button--cancel">
									Cancelar
								</button>
							</Link>
							<button className="button button--submit">Postar</button>
						</div>					
					</section>
				</main>
			</div>
		)
	}
}
export default NewPost