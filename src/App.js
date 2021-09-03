import React, { useState}  from "react";
import Feed from './components/Feed.js'

import './reset.css';
import './app.css';

function App() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [posts, setPosts] = useState([]);

  const newUser = (e) => {
    e.preventDefault();
    setName(input);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      _id: Math.floor(Math.random() * 1000000),
      post: input,
      date: new Date(),
    }
    setPosts([...posts, newPost]);
  } 

  return(
    <div>
      <h1 id="header-el">Social Media App</h1>
      {name ? 
      <>
      <h2 title="welcome">Hi {name}, please post something below!</h2>
        <form onSubmit={handleSubmit}>
          <input title="newPost" type="text" onChange={(e) => setInput(e.target.value)}></input>
          <button title="submitPost" type="submit">Submit</button>
        </form>
        <Feed
          posts={posts}
        />
      </>      
      : 
      <form onSubmit={(e) => newUser(e)}>
        <input title="userName" type="text" placeholder="Please enter your name" onChange={(e) => setInput(e.target.value)}></input>
        <button title="submitName" type="submit">Submit</button>
      </form> }
    </div>
  );
}

export default App;