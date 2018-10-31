import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Post from '../components/Post';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  componentDidMount(){
    fetch(
        `${process.env.REACT_APP_API_URL}/categories`,
        {
            headers: { 
              'Accept': 'application/json',
              'Authorization': Math.random().toString(36).substr(-8) 
            }
        }
    ).then(
      (res) => {
        console.log(res);
        return res.json()
      }
    ).then(
      (data) => {
        console.log(data);
        return data;
      }
    )
    .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container container--main">
          <Aside page="home"/>
          <Post />
          <Post />
        </main>
      </div>
    );
  }
}

export default Home;
