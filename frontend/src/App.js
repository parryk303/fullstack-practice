import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState();

  const getData = async () => {
    await axios('http://localhost:4000/data')
    .then(res => setPosts(res.data))
  }

  useEffect(() => {
    getData()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {posts && posts.map((post) => (
          <h1 key={post.id}>{post.id}</h1>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
