import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => (
	<header className="App-header" onClick={props.removeFilters} >
      <Link to="/" 
	      className="remove-styles-link"
      >
	      <h1 className="App-title">
	        Read.It
	        <span className="description">
	          A project for Udacity's React Nanodegree
	        </span>
	      </h1>
      </Link>
    </header>
)

export default Header;