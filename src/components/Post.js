import React from 'react';
import {Link} from 'react-router-dom';

const Post = () =>(
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
)

export default Post