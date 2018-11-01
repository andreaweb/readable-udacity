import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) =>(
  props.post ?
  <section className="post">
    <Link className="post__link" to="/post-details">
      <h2 className="post__name">{props.post.title}</h2>
    </Link>
    <Link className="post__category" to="/post-details">
      <h4>Category:{props.post.category}</h4>
    </Link>
    <div className="post__votes">
      <i className="fa fa-caret-up" />
      <p className="votes">{props.post.voteScore}</p>
      <i className="fa fa-caret-down" />
    </div>
    <div className="post__summary">
      <p>{props.post.body}</p>
      <span>{props.post.author}, {props.post.timestamp}</span>
    </div>
  </section>
  : null
)

export default Post