import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route component={Home} path="/" exact />
			<Route component={NewPost} path="/new-post" />
			<Route component={PostDetails} path="/post-details" />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root')
);
registerServiceWorker();
