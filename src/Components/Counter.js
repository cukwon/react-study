import React, { Component } from 'react';

class Counter extends Component {
    //Instant init
    // state = {
    //     logs: 0,
    //     offset: 1
    // }

    // Life Cycle ( 생성자 )
    constructor(props) {
        super(props);
        console.log("Create");
        this.state = {
            value:0, // 최종 결과
            logs: [], // 연산 로그
            offset: 10,
            index: -1
        };
        // 증가 함수
        this.Increase100 = this.handleAddNumber.bind(this, 100);
        this.Increase10 = this.handleAddNumber.bind(this, 10);
        this.Increase1 = this.handleAddNumber.bind(this, 1);
        // 감소 함수
        this.Decrease100 = this.handleAddNumber.bind(this, -100);
        this.Decrease10 = this.handleAddNumber.bind(this, -10);
        this.Decrease1 = this.handleAddNumber.bind(this, -1);
        // 곱셈 함수
        this.Multiplication2 = this.hanadleMultiNumber.bind(this, 2);
        // 나눗셈함수
        this.Devision2 = this.hanadleDevisNumber.bind(this, 2);
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('UnMount');
    }

    /**
     * shouldComponentUpdate
     */
    shouldComponentUpdate(prevProps,prevState) {
        // 상태변경시 항상 처리
        return true;
    }

    /**
     * 덧셈, 뺄셈을 처리 ( value을 바꾸고 log를 기록 )
     */
    handleAddNumber = (offset) => {
        const { value, logs, index } = this.state;
        const newValue = value + offset; // value 변경
        const newLogs = logs.slice(0, index + 1); // 현재 index 이후값 제거
        newLogs.push((offset >= 0 ? "+ "+offset : "- "+Math.abs(offset))); // log 추가 ( 덧셈, 뺄셈 확인 )
        this.setState({
            value: newValue,
            logs: newLogs,
            index: index + 1
        })
    };

    /**
     * 곱셈을 처리 ( value을 바꾸고 log를 기록 )
     */
    hanadleMultiNumber = (offset) =>{
        const { value, logs, index } = this.state;
        const newValue = value * offset; // value 변경
        const newLogs = logs.slice(0, index + 1);// 현재 index 이후값 제거
        newLogs.push("× "+offset); // log 추가
        this.setState({
            value: newValue,
            logs: newLogs,
            index: index + 1
        })
    };
    /**
     * 나눗셈을 처리 ( value을 바꾸고 log를 기록 )
     */
    hanadleDevisNumber = (offset) =>{
        const { value, logs, index } = this.state;
        const newValue = value / offset; // value 변경
        const newLogs = logs.slice(0, index + 1); // 현재 index 이후값 제거
        newLogs.push("÷ "+offset); // log 추가
        this.setState({
            value: newValue,
            logs: newLogs,
            index: index + 1
        })
    };
    /**
     * 로그를 분석후 최종값을 계산
     */
    handleRecoveryNumber = (index) => {
        const { logs } = this.state;
        let sum = 0;
        for (let i = 0; i <= index; i++) {
            const splitedLog = logs[i].split(" "); // 로그를 가져와 공백을 기준으로 분리
            const op = splitedLog[0], value = splitedLog[1]; // 로그를 연산자와 피연산자로 분리
            switch (op) {                                 // 연산자별 처리
                case "+" :
                    sum += parseInt(value);
                    break;
                case "-":
                    sum -= parseInt(value);
                    break;
                case "x":
                    sum *= parseInt(value);
                    break;
                case "÷":
                    value === 0 ? sum = 0 : sum /= parseInt(value);
                    break;
                default:
                    console.log("Error for op"); // 잘못된 연산자
                    break;
            }
        }
        return sum;
    }
    /**
     * 이전 계산값 불러오기 ( index 조정 )
     */
    handleDecreaseIndex = () => {
        const { index } = this.state;
        const newIndex = index - 1;
        if(newIndex >= -1) {
            this.setState({
                value:  this.handleRecoveryNumber(newIndex), // 결과값 재연산 ( 로그 기반 )
                index: newIndex
            });
        }
    };

    /**
     * 다음 계산값 불러오기 ( index 조정 )
     */
    handleIncreaseIndex = () => {
        const { logs, index } = this.state;
        const newIndex = index + 1;
        if(newIndex < logs.length) {
            this.setState({
                value: this.handleRecoveryNumber(newIndex), // 결과값 재연산 ( 로그 기반 )
                index: newIndex
            });
        }
    };
    /**
     * offset값 바꾸기
     */
    changeOffset = (evt) => {
        const { value } = evt.target;
        if(value.trim() === '') {
            this.setState({offset: 0});
        } else {
            const number = parseInt(value);
            if (number) {
                this.setState({offset: number});
            }
        }
    };
    /**
     * 계산식 생성
     */
    makeEquation = (index) => {
        const { logs } = this.state;
        let Equation = "Equation : 0 ";
        for(let i = 0; i <= index; i++) {
            Equation += logs[i] + " ";
        }
        Equation += " = ";
        return Equation;
    }


    /**
     * render ( setState 이후 실행 )
     */
    render() {
        const { index, value } = this.state;
        // console.log('render',logs.length, index,logs[index],logs);
        console.log(this.state);
        return(
            <div>
                <h1>카운터</h1>
                {/* 계산 로그 */}
                <div>
                    <p>{this.makeEquation(index)}</p>
                </div>
                {/* 결과 값과 이전, 다음버튼 */}
                <div>
                    <button onClick={this.handleDecreaseIndex}>⬅</button>
                    &nbsp;값 : {value}&nbsp;
                    <button onClick={this.handleIncreaseIndex}>➡︎</button>
                </div>
                {/* 자주쓰는 연산 */}
                <div>
                    <button onClick={this.Devision2}>÷2</button>
                    <button onClick={this.Decrease100}>-100</button>
                    <button onClick={this.Decrease10}>-10</button>
                    <button onClick={this.Decrease1}>-1</button>
                    <button onClick={this.Increase1}>+1</button>
                    <button onClick={this.Increase10}>+10</button>
                    <button onClick={this.Increase100}>+100</button>
                    <button onClick={this.Multiplication2}>x2</button>
                </div>
                {/* 커스텀 연산 */}
                <div>
                    <br/>
                    연산값 :
                    <input type="text" value={this.state.offset} onChange={this.changeOffset}/>
                    <button onClick={this.handleAddNumber.bind(this, this.state.offset)}>+</button>
                    <button onClick={this.handleAddNumber.bind(this, -(this.state.offset))}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;



/**
 * 1. 예외처리 하기 -> 나눗셈 연산 추가로 인한 버그발생 (0 / 으로 나누기)
 * 2. changeOffset 함수에서 Number함수를 다시 호출하는 이유는? ( if문 추가후 제거하지 않음 )
 * 3. 함수에서는 * 주석 사용하기 ( Ok )
 * 4. logs 자료구조 단점 -> 매번 split 한다. ( check )
 * 5. render 안의 Equation을 구하는 부분도 함수로 빼는게 좋을꺼 같다. ( OK )
 */