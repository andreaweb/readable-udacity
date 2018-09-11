import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Read.It
            <span className="description">
              A project for Udacity's React Nanodegree
            </span>
          </h1>
        </header>
        <main>
          <aside className="aside">
            <button className="button button--new">
              New Post
            </button>
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
            <Link to="/postDetails">
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
            <Link to="/postDetails">
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
            <Link to="/postDetails">
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

export default App;
