import React, { Component } from 'react';
import ToDoListTemplate from './ToDoListTemplate'

class TodoWrapper extends Component {
    render () {
        const style = {
            margin: '0',
            padding: '70px',
            border: '2px solid #63e6be',
            fontfamily: 'sans-serif',
            background: '#f9f9f9'
        }
        return (
            <div style={style}>
                <ToDoListTemplate form={<div>이렇게 말이죠.</div>}>
                    템플릿 완성
                </ToDoListTemplate>
            </div>
        )
    }
}
export default TodoWrapper;