import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  componentDidMount(){
     // id - UUID should be fine, but any unique id will work
     //    timestamp - timestamp in whatever format you like, you can use Date.now() if you like
     //    title - String
     //    body - String
     //    author - String
     //    category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <aside className="aside">
            <Link to="/new-post">
              <button className="button button--new">
              New Post
              </button>
            </Link>
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

          <section className="post">
            <Link className="post__link" to="/post-details">
              <h2 className="post__name">Title of this post is blah</h2>
            </Link>
            <div className="post__votes">
              <i className="fa fa-caret-up" />
              <p className="votes">12</p>
              <i className="fa fa-caret-down" />
            </div>
            <div className="post__summary">
              <p>I actually agree with everything</p>
              <span>John Doe, 20/08/2018</span>
            </div>
          </section>
          <section className="post">
            <Link className="post__link" to="/post-details">
              <h2 className="post__name">Halb si tsop siht fo eltit</h2>
            </Link>
            <div className="post__votes">
              <i className="fa fa-caret-up" />
              <p className="votes">12</p>
              <i className="fa fa-caret-down" />
            </div>
            <div className="post__summary">
              <p>I disagree but not really</p>
              <span>Eod Nhoj, 23/08/2018</span>
            </div>
          </section>
          <section className="post">
            <Link className="post__link" to="/post-details">
              <h2 className="post__name">Halb si tsop siht fo eltit</h2>
            </Link>   
            <div className="post__votes">
              <i className="fa fa-caret-up" />
              <p className="votes">12</p>
              <i className="fa fa-caret-down" />
            </div>
            <div className="post__summary">
              <p>I disagree but not really oaksmalks</p>
              <span>Eod Nhoj, 23/08/2018</span>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
