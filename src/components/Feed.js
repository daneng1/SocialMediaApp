import React, { useEffect } from 'react';
import './feed.css';

function Feed (props) {
  const posts = props.posts;

  useEffect(() => {
    timeSincePost();
  }, )

  const timeSincePost = (postDate) => {
    let time = new Date() - postDate;
    if (time < 60000) {
      let calc = Math.floor(time/1000);
      return calc + ' seconds ago'
    } else if (time >= 60000 && time < 3600000) {
      let calc = Math.floor((time/1000) / 60);
      return calc + ' minutes ago';
    } else if ( time >= 3600000 && time < 86400000) {
      let calc = Math.floor(((time/1000) /60) / 24);
      return calc + ' hours ago';
    } else {
      let calc = Math.floor(time / 86400000);
      return calc + ' days ago';
    }
  }

  return (
    <div>
      <section id="posts">
      {posts ? posts.map((item) => (
        <p title={item.post} key={item._id}
        >
          {item.post} - {timeSincePost(item.date)} 
        </p>
      )) : null}
      </section>
    </div>
  );
}

export default Feed;