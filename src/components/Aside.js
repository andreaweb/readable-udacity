import React from 'react'
import { getAllCategories } from '../actions/actions.js';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Aside extends React.Component{
	componentDidMount(){
		this.props.dispatch(getAllCategories())
	}
	render(){
		return(
			<aside className="aside">
				<button className="button button--new">
					<Link to="/new-post" className="remove-styles-link">
						New Post
					</Link>
				</button>
				{
					this.props.page === 'post-details'
					?
					<ul className="categories">
						<li className="categories__title">Current Category:</li>
						<li>{this.props.post ? this.props.post.category : ''}</li>
					</ul>
					:
					<section>
						<div className="order-by">
	            <label className="order-by__label">
	              Order By
	            </label>
	            <select 
	            	className="order-by__select" 
	            	onChange={(e) => this.props.sortBy(e.target.value)}
	            	>
	              <option value="date">Last Posts</option>
	              <option value="votes">Best Voted</option>
	            </select>
	          </div>
	          <ul className="categories">
	            <li className="categories__title">
	            	Categories
	            </li>
	            { this.props.categories 
	            	&& this.props.categories.map(
	            			(cat, key) =>
	            			<Link key={key} to={`/${cat.name}`} className="remove-styles-link">
											<li 
		            				onClick={() => this.props.reload(cat.name)}
		            			>
		            				{cat.name}
		            			</li>
										</Link>
	            		)
	            }
	          </ul>
	        </section>
				}
			</aside>
		)
	}
} 

function mapStateToProps(state){
	const { post } = state.post
	const { categories } = state.categories
	return { post, categories}
}

export default connect(mapStateToProps)(Aside)
