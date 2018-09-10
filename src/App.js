import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Read.It</h1>
        </header>
        <main>
          <aside>
            <button>New Post</button>
            <ul>
              <li>Fic</li>
              <li>Non-Fic</li>
            </ul>
          </aside>
          <section>
            <h2>Title of this post is blah</h2>
            <div className="votes">
              12
            </div>
            <div className="postSummary">
              <p>I actually agree with everything</p>
              <span>John Doe, 20/08/2018</span>
            </div>
          </section>
          <section>
            <h2>Halb si tsop siht fo eltit</h2>
            <div className="votes">
              12
            </div>
            <div className="postSummary">
              <p>I disagree but not really</p>
              <span>Eod Nhoj, 23/08/2018</span>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
