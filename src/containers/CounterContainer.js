import React, { Component } from 'react';
import CounterRedex from "../components/counter/CounterRedex";
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter'

class CounterContainer extends Component {

    handleIncrement = () => {
      console.log('incre');
        this.props.increment();
    };
    handleDecrement = () => {
      console.log('decre');
        this.props.decrement();
    };
    handleSetValue = (e) => {
      console.log('set');
      this.props.setValue(e.target.value);
    };

    render() {
        const { handleIncrement, handleDecrement, handleSetValue } = this;
        const { number, value } = this.props;

        return (
            <CounterRedex onIncrement={handleIncrement} onDecrement={handleDecrement} onSetValue={handleSetValue} number={number} value={value}/>
        );
    }
}

/**
 *  Redux를 이용한 state와 dispatch(function) 받아오기
 */
export default connect(
    (state)=>({
        number: state.counter.number,
        value : state.counter.value
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement()),
        setValue : (value) => dispatch(counterActions.setValue(value))
    })
)(CounterContainer);
