import React from 'react'
import { getAllCategories } from '../actions/actions.js';
import { connect } from 'react-redux';

class Aside extends React.Component{
	componentDidMount(){
		if(!this.props.categories){
		  this.props.dispatch(getAllCategories())
		}
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
		              <li>{this.props.categories ? this.props.categories[0].name : null}</li>
		              <li>Non-Fic</li>
		            </ul>
		        </section>
			}
		</aside>
		)
	}
} 


function mapStateToProps(state){
  return state.categories
}

export default connect(mapStateToProps)(Aside)
