import React from 'react';
import Button_UI from './UI/button/Button_UI';




const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}: {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <Button_UI onClick={() => props.remove(props.post)}>Delete</Button_UI>
            </div>
        </div>
    );
};

export default PostItem;