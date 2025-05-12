import React, { useEffect, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import PostSevice from '../API/PostService';
import { useFetching } from './hooks/useFetching';
import LoaderUI from './UI/loader/LoaderUI';

const PostIDPage = () => {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});

    const [fetchPostByID, isLoadingPost, errorPost] = useFetching(async () => {
        const responce = await PostSevice.getByID(params.id);
        setPost(responce.data);
    })

    const [fetchCommentsByID, isLoadingComments, errorComment] = useFetching(async () => {
        const responce = await PostSevice.getCommentsByID(params.id);
        setComments(responce.data);
    })


    useEffect(() => {
        fetchPostByID();
        fetchCommentsByID();
    }, []);

    return (
        <div>
            {
                isLoadingPost
                    ? <LoaderUI />
                    : <h1>id = {post.id}, {post.title}</h1>
            }

        </div>
    );
};

export default PostIDPage;