import React from 'react';

const CounterRedex = ({ number, value, onIncrement, onDecrement, onSetValue}) => {
    return (
        <div className='counter'>
            <h1>{number}</h1>
            <h6>{value}</h6>
            <input type='text' value={value} onChange={onSetValue} />
            <button onClick={onIncrement}>증가 (+)</button>
            <button onClick={onDecrement}>감소 (-)</button>
        </div>
    );
};

CounterRedex.defaultProps = {
    number: 0
}

export default CounterRedex;
