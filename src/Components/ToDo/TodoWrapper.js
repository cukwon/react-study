import React, { Component } from 'react';
import { Map, List } from 'immutable';
import ToDoListTemplate from './ToDoListTemplate'
import Form from "./Form";
import TodoItemList from "./TodoItemList";
import Palette from "./Palette";

class TodoWrapper extends Component {

    id = 0;
    colors= ['#343a40', '#f03e3e', '#12b886', '#228ae6'];
    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            todoList: List([]),
            selected : '#343a40'
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
        const { value, todoList } = this.state;
        console.log("onCreate", value, " : ", todoList)
        if( value !== "") {
            const nextList = todoList.push(Map({id: this.id++, text: value, checked: false, color:this.state.selected}))
            console.log(nextList);
            this.setState({
                value: "",
                todoList: nextList
            })
        }
    };

    /**
     * 할일을 제거한다.
     * @param id
     */
    handleDeleteTodo = ( id ) => {
        const {todoList} = this.state;
        console.log("Clicked", id);
        const nextList = todoList.delete(id);
        console.log(nextList)
        this.setState({
            todoList: nextList
        });
    };

    /**
     * 할일을 완료상태로 바꾸거나 미완료상태로 바꾼다.
     * @param id
     */
    handleCheckTodo = ( id ) => {
        const {todoList} = this.state;
        console.log("Clicked", id);
        console.log(todoList.getIn([id,'checked']))
        const nextList = todoList.update(
            todoList.findIndex(function(item) {
                return item.get("id") === id ;
            }), function(item) {
                return item.set("checked", !item.get('checked'));
            }
        );
        this.setState({
            todoList: nextList
        });
    };

    handleColorChange = (color) =>{
        console.log(color);
        this.setState({
            selected: color
        })
    };

    /**
     *  엔터키가 눌리면 할일 추가함
     * @param e(Event Object)
     */
    handleKeyPress= (e) => {
        if(e.key === 'Enter') {
            this.handleAddTodo();
        }
    };

    /**
     * Render
     * @returns {*}
     */
    render () {
        console.log("render wrapper");
        const style = {
            margin: '0',
            padding: '70px',
            border: '2px solid #63e6be',
            fontfamily: 'sans-serif',
            background: '#f9f9f9'
        };
        return (
            <div className='Wrapper' style={style}>
                <ToDoListTemplate form={<Form value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleValueChange} onCreate={this.handleAddTodo} />}
                                  palette={<Palette colors={this.colors} selected={this.state.selected} onSelect={this.handleColorChange}/>}>
                    <TodoItemList todos={this.state.todoList} onDelete={this.handleDeleteTodo} onCheck={this.handleCheckTodo}/>
                </ToDoListTemplate>
            </div>
        )
    }
}
export default TodoWrapper;