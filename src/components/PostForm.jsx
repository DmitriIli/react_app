import React, {useState} from 'react';
import Input_UI from './UI/input/Input_UI';
import Button_UI from './UI/button/Button_UI';

const PostForm = ({ create, setVisible }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' });
        setVisible(false);

    }

    return (
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
    );
};

export default PostForm;