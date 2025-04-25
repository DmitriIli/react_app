import React, { use, useState } from 'react';
import '../src/styles/App.css';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Button_UI from './components/UI/button/Button_UI';
import Input_UI from './components/UI/input/Input_UI';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'description' },
    { id: 2, title: 'JavaScript 2', body: 'description' },
    { id: 3, title: 'JavaScript 3', body: 'description' }
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id:Date.now()}])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        <Input_UI
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='name'
        />
        <Input_UI
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type='text'
          placeholder='description'
        />
        <Button_UI onClick={addNewPost}>Add new</Button_UI>
      </form>
      <PostList posts={posts} title='Posts #1' />
    </div>
  );
}

export default App;
