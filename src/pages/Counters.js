import React from 'react';
import { Link } from 'react-router-dom';
import Counter from "../components/counter/Counter";
import Counter2 from "../components/counter/CounterCm";
import CounterContainer from '../containers/CounterContainer'
import NaviButton from "../components/basic/NaviButton";



const Counters = () => {
    const style = {
        padding:'50px',
        border: '1px solid blue'
    };
    return (
        <div className='App'>
            <div className='counter-my' style={style}>
                <Counter/>
            </div>
            <div className='counter-cm' style={style}>
                <Counter2/>
            </div>
            <div className= 'counterRedux'style={style}>
                <CounterContainer/>
            </div>
            <div className='navi'>
                <NaviButton name='뒤로가기' url='/'/>
            </div>
        </div>
    );
};

export default Counters;