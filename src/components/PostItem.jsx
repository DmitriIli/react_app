import React from 'react';
import ButtonUI from './UI/button/ButtonUI';
import { useNavigate } from 'react-router-dom';



const PostItem = (props) => {
    const router = useNavigate();
    console.log(router);
    return (

        <div className='post'>
            <div className='post__content'>
                
                <strong>{props.post.id}: {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <ButtonUI onClick={() => router(`/posts/${props.post.id}`)}>Edit</ButtonUI>
                <ButtonUI onClick={() => props.remove(props.post)}>Delete</ButtonUI>
            </div>
        </div>
    );
};

export default PostItem;