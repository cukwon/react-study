import React, { Component } from 'react';
import './css/TodoItem.css'

class TodoItem extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.todo !== this.props.todo) {
            return true;
        }
        return false
    }

    render () {
        const { todo, onDelete, onCheck } = this.props;
        console.log("render TodoItem",todo.get('id'));
        const style = {
            color: todo.get('color')
        }
        return (
            <div className='todo-item' onClick={() => onCheck(todo.get('id'))}>
                <div className='remove' onClick={(e) => {e.stopPropagation(); onDelete(todo.get('id'))}}>
                   &times;
                </div>
                <div className={"todo-text " + (todo.get('checked') && "checked")} style={style} >
                    {todo.get('text')}
                </div>
                {todo.get('checked') && (<div className='check-mark'>✓</div> )}
            </div>
        )
    }
}

export default TodoItem;