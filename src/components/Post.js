import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) =>(
  props.post ?
  <section className="post">
    <Link className="post__link" to={`/${props.post.category}/${props.post.id}`}>
      <h2 className="post__name">
        {props.post.title}
      </h2>
    </Link>
    <Link className="post__category" to={`/post-categories/${props.post.category}`} 
      onClick={() => props.reload(props.post.category)}
    >
      <h4>
        Category: {props.post.category}
      </h4>
    </Link>
    <div className="post__votes">
      <i className="fa fa-caret-up" onClick={() => props.upvote(props.post.id)}/>
      <p className="votes">
        {props.post.voteScore}
      </p>
      <i className="fa fa-caret-down" onClick={
        () => props.downvote(props.post.id)}
        />
    </div>
    <div className="post__summary">
      <p className="post__body">
        {props.post.body}
      </p>
      <span>
        <em><b>By: </b></em>
        {props.post.author}, 
        <em><b> Posted At: </b></em>
        {new Date(props.post.timestamp).toLocaleString("en-US", {
            "day": "numeric",
            "hour":"numeric",
            "minute":"numeric",
            "month":"short",
            "year":"numeric"
        })}
      </span>
    </div>
  </section>
  : null
)

export default Post