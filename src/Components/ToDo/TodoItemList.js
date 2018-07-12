import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {

    /**
     * ShouldComponentUpdate
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        /** 리스트에 변화 없으면 재출력 안함 */
        if(nextProps.todos !== this.props.todos) {
            return true;
        }
        return false;
    }


    /**
     * 할일의 정보를 Todoitem에 담아서 리스트화
     * @returns {*}
     */
    viewTodoList = () => {
        const { todos, onDelete, onCheck } = this.props;
        const list = todos.map(todo => (<TodoItem todo={todo} onCheck={onCheck} onDelete={onDelete} key={todo.id}/>));
        return list;
    };

    render () {
        console.log("render TodoItemList");
        return (
            <div className='TodoItemList'>
                {this.viewTodoList()}
            </div>
        )
    }
}

export default TodoItemList;