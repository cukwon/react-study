import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.todo !== this.props.todo) {
            return true;
        }
        return false
    }

    render () {
        const { todo, onDelete, onCheck } = this.props;
        console.log("render TodoItem",todo.id);
        const { checked } = todo;
        const style = {
            color: todo.color
        }
        return (
            <div className='todo-item' onClick={() => onCheck(todo.id)}>
                <div className='remove' onClick={(e) => {e.stopPropagation(); onDelete(todo.id)}}>
                   &times;
                </div>
                <div className={"todo-text " + (checked && "checked")} style={style} >
                    {todo.text}
                </div>
                {checked && (<div className='check-mark'>✓</div> )}
            </div>
        )
    }
}

export default TodoItem;