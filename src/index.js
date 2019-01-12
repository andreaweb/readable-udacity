import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import NotFound from './pages/404';
import PostDetails from './pages/PostDetails';
import NewPost from './pages/NewPost';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route component={NewPost} path="/(new-post|edit-post)/:id?/" />
				<Route component={Home} exact path="/:category?" />
				<Route component={PostDetails} path="/:category/:id?" />
				<Route component={NotFound} path="/not-found" />
			</Switch>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
);
