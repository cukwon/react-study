import React, { Component } from 'react';
import './css/TodoItem.css'

class TodoItem extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        /** 할일의 상태가 변경되었을떄만 다시 렌더링 */
        if(nextProps.todo !== this.props.todo) {
            return true;
        }
        return false
    }

    /**
     * Render
     * @returns {*}
     */
    render () {
        const { todo, onDelete, onCheck } = this.props;
        console.log("render TodoItem",todo.get('id'));
        const style = {
            color: todo.get('color')
        };
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