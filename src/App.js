import React, { Component } from 'react';
import './App.css';
import MyName from './Components/Expample/Myname';
import Counter from './Components/Counter/Counter';
import Counter2 from './Components/Counter/Counter2';
import PhoneBook from './Components/PhoneBook/PhoneBook'
import ToDoListTemplate from "./Components/ToDo/ToDoListTemplate";
import TodoWrapper from "./Components/ToDo/TodoWrapper";
import CommentsWrapper from "./Components/Comments/CommentsWrapper";
import TreeView from './Components/TreeView/TreeView';

class App extends Component {

    // Constructor
    // constructor(props) {
    //     super(props)
    // }

    //render
    render() {
        const style = {
            backgroundColor:'black',
            padding: '12px',
            color:'white',
            fontSize: '16px'
        };
        return (
            <div className= 'App'>
                <CommentsWrapper/>
            </div>
        );
    }
}

export default App;
