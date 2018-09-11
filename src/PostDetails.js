import React from 'react';
import {Link} from 'react-router-dom';

class PostDetails extends React.Component{
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
				<main className="container container--main">
					<aside className="aside">
						<button className="button button--new">
						New Post
						</button>
						<ul className="categories">
							<li className="categories__title">Current Category:</li>
							<li>Fic</li>
						</ul>
					</aside>
					<section className="post-details">
						<h2 className="post-details__name">Title of this post is blah</h2>
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
							<p className="votes">12</p>
							<i className="fa fa-caret-down" />
						</div>
						<div className="post-details__post">
							<p>I actually agree with everything</p>
              				<span>John Doe, 20/08/2018</span>
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
			</div>
			)
	}
}
export default PostDetails