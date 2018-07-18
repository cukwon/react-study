import React from 'react';
import { Link } from 'react-router-dom';
import TodoWrapper from "../components/ToDo/TodoWrapper";

const Todolist = () => {
    return (
        <div>
            <div className='Todolist'>
                <TodoWrapper/>
            </div>
            <div>
                <Link to="/">뒤로가기</Link>
            </div>
        </div>
    )
};

export default Todolist;