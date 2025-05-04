import React, { use, useImperativeHandle, useMemo, useState } from 'react';
import '../src/styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal_UI from './components/UI/modal/Modal_UI';
import Button_UI from './components/UI/button/Button_UI';
import { usePosts } from './components/hooks/usePosts';

function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: '1 description' },
    { id: 2, title: 'Python', body: '2 description' },
    { id: 3, title: 'C++', body: '3 description' }
  ]);

  const [filter, setFilter] = useState({ sort: 'body', query: '' })
  const [modal, setModal] = useState(false)
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query)


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  // async function fetchPosts() {
  //   const responce = await axios.get()
  // }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }


  return (
    <div className="App">
      <Button_UI style={{marginTop:20}} onClick = {()=> setModal(true)}>
        Add post
      </Button_UI>
      <Modal_UI visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </Modal_UI>
      
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList posts={searchAndSortedPosts} remove={removePost} title='Posts #1' />
    </div>
  );
}

export default App;
