import React from 'react';
import './TodoListTemplate.css';

const ToDoListTemplate = ({form, children}) => {
        return (
            <div className='todo-list-template'>
                <div className='title'>
                    오늘의 할 일
                </div>
                <div className='form-wrapper'>
                    {form}
                </div>
                <div className='todos-wrapper'>
                    {children}
                </div>
            </div>
        )
}

export default ToDoListTemplate;