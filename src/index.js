import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import PostDetails from './PostDetails';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route component={App} path="/" exact />
			<Route component={PostDetails} path="/postDetails" exact />
		</Switch>
	</BrowserRouter>
	, document.getElementById('root')
);
registerServiceWorker();
