import React, { Component } from 'react';
import './App.css';
import MyName from './Components/Expample/Myname';
import Counter from './Components/Counter/Counter';
import Counter2 from './Components/Counter/Counter2';
import PhoneBook from './Components/PhoneBook/PhoneBook'
import ToDoListTemplate from "./Components/ToDo/ToDoListTemplate";
import TodoWrapper from "./Components/ToDo/TodoWrapper";
import TreeView from './Components/TreeView/TreeView';
import CommentsWrapper2 from "./Components/NewComments/CommentsWrapper";

class App extends Component {

    /**
     * Render
     * 상태가 바뀌었을떄 호출 ( setState에 의해 )
     */
    render() {
        console.log('app.js');
        return (
            <div className= 'App'>
                <CommentsWrapper2/>
            </div>

        );
    }
}

export default App;
