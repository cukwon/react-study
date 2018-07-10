import React, { Component } from 'react';
import './App.css';
import MyName from './Components/Myname';
import Counter from './Components/Counter';
import Counter2 from './Components/Counter2';
import PhoneBook from './Components/PhoneBook/PhoneBook'

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
                    <h1>React.js</h1>
                    <MyName/>
                    <MyName name="리엑트"/>
                </div>
                <br/><br/>
                <div style={style}>
                    <Counter/>
                </div>
                <br/><br/>
                 <div style={style}>
                    <Counter2/>
                </div>

                <br/><br/>
                <div style={style}>
                    <PhoneBook/>
                </div>
            </div>
        );
    }
}

export default App;
