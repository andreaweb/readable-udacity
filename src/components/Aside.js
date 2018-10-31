import React from 'react'

const Aside = props => (
	<aside className="aside">
		<button className="button button--new">
		New Post
		</button>
		{
			props.page === 'post-details'
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
	              <li>Fic</li>
	              <li>Non-Fic</li>
	            </ul>
	        </section>
		}
		
	</aside>
)

export default Aside
