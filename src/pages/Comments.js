import React from 'react';
import { Link } from 'react-router-dom';
import CommentsWrapper2 from "../components/Comments/CommentsWrapper";
import NaviButton from "../components/basic/NaviButton";


const Comments = () => {
    return (
        <div className='App'>
            <CommentsWrapper2/>
            <NaviButton name='뒤로가기' url='/'/>
        </div>
    );
};

export default Comments;