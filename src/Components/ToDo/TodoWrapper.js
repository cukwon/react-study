import React, { Component } from 'react';
import ToDoListTemplate from './ToDoListTemplate'
import Form from "./Form";

class TodoWrapper extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todoList: []
        }
    }

    /**
     * value의 상태를 변경
     * @param e(Event Object)
     */
    handleValueChange = (e) => {
        //console.log('handleValueChange', e.target.value)
        this.setState({
            value: e.target.value
        })
    };

    /**
     *  value를 todoList에 추가한다.
     */
    handleAddTodo = () => {
        //console.log("onCreate", this.state.value, " : ", this.state.todoList)
        const { value, todoList } = this.state;
        todoList.push(value);
        this.setState({
            value : "",
            todoList: todoList
        })
    };

    /**
     * todoList의 정보를 가공하여 리스트로 변환
     * @returns {any[]} (todoList를 가공한 리스트)
     */
    viewTodoList = () => {
        const { todoList } = this.state;
        const list = todoList.map(oneTodo => (<p>{oneTodo}</p>));
        return list;
    }


    /**
     * Render
     * @returns {*}
     */
    render () {
        const style = {
            margin: '0',
            padding: '70px',
            border: '2px solid #63e6be',
            fontfamily: 'sans-serif',
            background: '#f9f9f9'
        };
        return (
            <div style={style}>
                <ToDoListTemplate form={<Form value={this.state.value} onKeyPress={()=>{console.log("onKeyPress")}} onChange={this.handleValueChange} onCreate={this.handleAddTodo} />}>
                    {this.viewTodoList()}
                </ToDoListTemplate>
            </div>
        )
    }
}
export default TodoWrapper;