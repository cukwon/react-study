import React from 'react';
import './TodoListTemplate.css';

/**
 * TodoList의 모양을 잡아주는 템플릿
 * @param form      // 입력 부분
 * @param children  // 리스트 출력 부분
 * @returns {*}
 * @constructor
 */
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