import React from 'react';
import PostItem from './PostItem';



const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>
                    Empty
                </h1>
            </div>
        )
    }


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id} remove={remove} />
            )}
        </div>
    );
};

export default PostList;



