import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIDPage from './PostIDPage';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route path='/error' element={<Error />} />
            <Route exact path='/posts/:id' element={<PostIDPage />} />
            <Route
                path="*"
                element={<Navigate to="/error" replace />}
            />
        </Routes>
    );
};

export default AppRouter;