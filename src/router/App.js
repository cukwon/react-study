import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import {Home, Comments, Counters, Treeviews, Todolist, PhoneBook, Expample} from '../pages'

class App extends Component {

    /**
     * Render
     * 상태가 바뀌었을떄 호출 ( setState에 의해 )
     */
    render() {
        console.log('app.js');
        return (
            <div className= 'App'>
                <Route exact path='/' component={Home}/>
                <Route exact path='/example' component={Expample}/>
                <Route exact path='/counter' component={Counters}/>
                <Route exact path='/comments' component={Comments}/>
                <Route exact path='/phonebook' component={PhoneBook}/>
                <Route exact path='/todolist' component={Todolist}/>
                <Route exact path='/treeview' component={Treeviews}/>
            </div>

        );
    }
}

export default App;
