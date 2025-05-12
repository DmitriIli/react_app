import React, { use, useEffect, useMemo, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import ModalUI from '../components/UI/modal/ModalUI';
import ButtonUI from '../components/UI/button/ButtonUI';
import { usePosts } from '../components/hooks/usePosts';
import PostSevice from '../API/PostService';
import LoaderUI from '../components/UI/loader/LoaderUI';
import { useFetching } from '../components/hooks/useFetching';
import { getPageCount } from '../components/utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import '../styles/App.css'

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const searchAndSortedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostLoading, errorPost] = useFetching(async () => {
    const responce = await PostSevice.getAll(limit, page);
    setPosts(responce.data);
    const totalCount = responce.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })




  useEffect(() => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }


  return (
    <div className="App">
      <ButtonUI style={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Add post
      </ButtonUI>
      <ModalUI visible={modal} setVisible={setModal}>
        <PostForm create={createPost} setVisible={setModal} />
      </ModalUI>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {isPostLoading
        ? <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}><LoaderUI /></div>
        : <PostList posts={searchAndSortedPosts} remove={removePost} title='Posts #1' />
      }
      {
        errorPost &&

        <h1> ${errorPost}</h1>
      }
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div >
  );
}

export default Posts;
