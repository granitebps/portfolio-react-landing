import React from 'react';
import Link from 'next/link';
import moment from 'moment';

function Blog(props) {
  const { id, image, title, created_at, slug } = props.data;

  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link href={`blogs/[id]`} as={`/blogs/${id}`}>
          <a>
            <img src={image} alt={title} />
          </a>
        </Link>
        <div className="mi-blog-date">
          <span className="date">{moment(created_at).format('DD')}</span>
          <span className="month">{moment(created_at).format('MMM')}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link href={`blogs/[id]`} as={`/blogs/${id}`}>
            <a>{title}</a>
          </Link>
        </h5>
      </div>
    </div>
  );
}

export default Blog;
