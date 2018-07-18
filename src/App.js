import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import CounterRedex from "./components/counter/CounterRedex";
import CounterContainer from "./containers/CounterContainer";

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
                <div style={style}>
                    <Provider store={{store}}>
                        <CounterContainer/>
                    </Provider>
                </div>
            </div>
        );
    }
}

export default App;
