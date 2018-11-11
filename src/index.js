import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={NewPost} path="/(new-post|edit-post)/" />
				<Route component={PostDetails} path="/post-details" />
			</Switch>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);
