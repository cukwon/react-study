import React from 'react';
import { Link } from 'react-router-dom';
import CommentsWrapper2 from "../components/Comments/CommentsWrapper";


const Comments = () => {
    return (
        <div className='App'>
            <CommentsWrapper2/>
            <Link to='/'>메인으로</Link>
        </div>
    );
};

export default Comments;