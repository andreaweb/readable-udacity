import React from 'react';
import ReactDOM from 'react-dom';
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
		        <main>
		          <aside className="aside">
		            <button className="button button--new">
		              New Post
		            </button>
		            <div className="order-by">
		              <label className="order-by__label">
		                Order By
		              </label>
		              <select className="order-by__select">
		                <option>Date</option>
		                <option>Votes</option>
		              </select>
		            </div>
		            <ul className="categories">
		              <li className="categories__title">Categories</li>
		              <li>Fic</li>
		              <li>Non-Fic</li>
		            </ul>
		          </aside>

		          <section className="post-details">
		            
		          </section>
		        </main>
		    </div>
		)
	}
}
export default PostDetails