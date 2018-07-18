import React, { Component } from 'react';

/**
 * 연산타입을 받아서 연산 기호를 리턴한다.
 * @param type
 * @return {*}
 */
const getMarkFromType = (type) => {
    switch (type) {
        case 'add': return '+';
        case 'sub': return '-';
        case 'mul': return '*';
        case 'div': return '÷';
        default: return '';
    }
}

/**
 * 계산식 문자열을 생성한다.
 * @param actions
 * @return {*}
 */
const getEquation = (actions) => {
    let equation = actions.reduce((prev, curr) => prev + " " + +getMarkFromType(curr.type) + " " + curr.value, ''); // 줄바꿈 문제로 공백 추가
    equation = 'Equation : 0' + equation + ' =';
    return equation;
};

/**
 * 액션들을 연산하여 값을 계산한다.
 * @param actions
 * @return {*}
 */
const calculate = (actions) => {
    return actions.reduce(calculateAction, 0);
}

/**
 * 하나의 액션을 연산한다.
 * @param prev
 * @param curr
 * @return {*}
 */
const calculateAction = (preValue, curr) => {
    switch (curr.type) {
        case 'add': return preValue + curr.value;
        case 'sub': return preValue - curr.value;
        case 'mul': return preValue * curr.value;
        case 'div': return preValue / curr.value;
        default: return preValue;
    }
};

/**
 * counter
 */
class Counter extends Component {
    /**
     * constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            // 연산 로그
            actions: [],
            // inputNumber
            offset: 0,
            // dataIndex
            index: -1
        };
    }

    /**
     * shouldComponentUpdate
     */
    shouldComponentUpdate(prevProps,prevState) {
        // 조건없이 없데이트 한다.
        return true;
    }

    /**
     * Input 값이 변경되면 발생한다.
     */
    handleChangeOffset = (event) => {
        const value = event.target.value;
        if(value.trim() === '') {
            // 빈스트링이면 offset 을 0으로 설정한다.
            this.setState({offset: 0});
        } else {
            const number = parseInt(value);
            // 숫자가 입력되면 offset 을 설정한다.
            if (number) {
                this.setState({offset: number});
            }
        }
    };

    /**
     * 액션을 추가한다.
     */
    addAction = (action) => {
        const actions = this.state.actions.slice(0, this.state.index + 1);
        actions.push(action);
        this.setState({actions, index: actions.length - 1});
    };

    /**
     * 인덱스를 변경한다.
     */
    changeIndex = (value) => {
        let index = this.state.index + value;
        if(index >= -1 && index < this.state.actions.length) {
            this.setState({index})
        }
        // this.setState({index}) // 원하지 않은 값 변경 ( 버그 발생 ( 액션 2번 순회) )
    };


    /**
     * render
     */
    render() {
        const {
            index,
            offset,
            actions
        } = this.state;

        // 현재 인덱스 까지의 액션을 구한다.
        const currentActions = actions.slice(0, index + 1);

        return(
            <div>
                <h1>카운터 2</h1>
                {/* 계산 로그 */}
                <div>
                    <p>{getEquation(currentActions)}</p>
                </div>
                {/* 결과 값과 이전, 다음버튼 */}
                <div>
                    <button onClick={() => this.changeIndex(-1)}>⬅</button>
                    &nbsp;값 : {calculate(currentActions)}&nbsp;
                    <button onClick={() => this.changeIndex(1)}>➡︎</button>
                </div>
                {/* 자주쓰는 연산 */}
                <div>
                    <button onClick={() => {this.addAction({type: 'div', value: 2})}}>÷2</button>
                    <button onClick={() => {this.addAction({type: 'sub', value: 100})}}>-100</button>
                    <button onClick={() => {this.addAction({type: 'sub', value: 10})}}>-10</button>
                    <button onClick={() => {this.addAction({type: 'sub', value: 1})}}>-1</button>
                    <button onClick={() => {this.addAction({type: 'add', value: 1})}}>+1</button>
                    <button onClick={() => {this.addAction({type: 'add', value: 10})}}>+10</button>
                    <button onClick={() => {this.addAction({type: 'add', value: 100})}}>+100</button>
                    <button onClick={() => {this.addAction({type: 'mul', value: 2})}}>x2</button>
                </div>
                {/* 커스텀 연산 */}
                <div>
                    <br/>
                    연산값 :
                    <input type="text" value={this.state.offset} onChange={this.handleChangeOffset}/>
                    <button onClick={() => {this.addAction({type: 'add', value: offset})}}>+</button>
                    <button onClick={() => {this.addAction({type: 'sub', value: offset})}}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;