import React from 'react';
import { Link } from 'react-router-dom';
import TodoWrapper from "../components/ToDo/TodoWrapper";
import NaviButton from "../components/basic/NaviButton";

const Todolist = () => {
    return (
        <div>
            <div className='Todolist'>
                <TodoWrapper/>
            </div>
            <div>
                <NaviButton name='뒤로가기' url='/'/>
            </div>
        </div>
    )
};

export default Todolist;