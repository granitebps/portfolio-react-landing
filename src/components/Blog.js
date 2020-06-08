import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Blog(props) {
  const { id, image, title, created_at, slug } = props.data;

  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link to={`blogs/blog-details/${id}/${slug}`}>
          <img src={image} alt={title} />
        </Link>
        <div className="mi-blog-date">
          <span className="date">{moment(created_at).format('DD')}</span>
          <span className="month">{moment(created_at).format('MMM')}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link to={`blogs/blog-details/${id}/${slug}`}>{title}</Link>
        </h5>
      </div>
    </div>
  );
}

export default Blog;
