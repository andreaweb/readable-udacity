import React from 'react'
import { getAllCategories } from '../actions/actions.js';
import { connect } from 'react-redux';

class Aside extends React.Component{
	componentDidMount(){
		this.props.dispatch(getAllCategories())
		console.log(this.props)
	}
	render(){
		return(
		<aside className="aside">
			<button className="button button--new">
			New Post
			</button>
			{
				this.props.page === 'post-details'
				?
				<ul className="categories">
					<li className="categories__title">Current Category:</li>
					<li>Fic</li>
				</ul>
				:
				<section>
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
		              { this.props.categories 
		              	? this.props.categories.map(
		              			(cat, key) =>
		              			<li key={key}>{cat.name}</li>
		              		)
		              	: null
		              }
		            </ul>
		        </section>
			}
		</aside>
		)
	}
} 


const mapStateToProps = (state) => {
	return state.categories
}

export default connect(mapStateToProps)(Aside)
