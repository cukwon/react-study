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
        this.multiplication2 = this.hanadleMultiNumber.bind(this, 2);
        // 나눗셈함수
        this.devision2 = this.hanadleDevisNumber.bind(this, 2);
        // 바인딩 불가 함수 (Q)
        // this.IncreaseOffset = this.handleAddNumber.bind(this, this.state.offset);
        // this.DecreaseOffset = this.handleAddNumber.bind(this, -(this.state.offset));
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

    // value or index or offset이 변해야 re-render
    shouldComponentUpdate(prevProps,prevState) {
        //console.log(prevState == this.state);
        if(prevState.value !== this.state.value ||
            prevState.index !== this.state.index ||
            prevState.offset !== this.state.offset) {
            return true;
        }
        return false;
    }

    // logs 배열에 index의 값에 offset만큼 더한후 추가
    handleAddNumber = (offset) => {
        const { value, logs, index } = this.state;
        const newNumber = value + offset;
        const newNumbers = logs.slice(0, index + 1);
        newNumbers.push((offset >= 0 ? "+ "+offset : "- "+Math.abs(offset)));
        this.setState({
            value: newNumber,
            logs: newNumbers,
            index: index + 1
        })
    };

    hanadleMultiNumber = (offset) =>{
        const { value, logs, index } = this.state;
        const newNumber = value * offset;
        const newNumbers = logs.slice(0, index + 1);
        newNumbers.push("x "+offset);
        this.setState({
            value: newNumber,
            logs: newNumbers,
            index: index + 1
        })
    };

    hanadleDevisNumber = (offset) =>{
        const { value, logs, index } = this.state;
        const newNumber = value / offset;
        const newNumbers = logs.slice(0, index + 1);
        newNumbers.push("÷ "+offset);
        this.setState({
            value: newNumber,
            logs: newNumbers,
            index: index + 1
        })
    };

    // 로그를 분석후 최종값을 계산
    handleRecoveryNumber = (index) => {
        const { logs } = this.state;
        let sum = 0;
        for (let i = 0; i <= index; i++) {
                const spliteLog = logs[i].split(" "); // 로그를 가져옴
                const op = spliteLog[0], value = spliteLog[1]; // 로그를 연산자와 피연산자로 분리
                switch (op) {
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
                        sum /= parseInt(value);
                        break;
                    default:
                        console.log("Error for op"); // 잘못된 연산자들
                        break;
                }
            }
            return sum;
    }

    // 이전 계산값 불러오기 ( index 조정 )
    handleDecreaseIndex = () => {
        const { index } = this.state;
        const newIndex = index - 1;
        let sum = 0;
        if(newIndex >= -1) {
            sum = this.handleRecoveryNumber(newIndex);
            this.setState({
                value: sum,
                index: newIndex
            });
        }
    };

    // 이후 계산값 불러오기 ( index 조정 )
    handleIncreaseIndex = () => {
         const { logs, index } = this.state;
        const newIndex = index + 1;
        let sum = 0;
        if(newIndex < logs.length) {
            sum = this.handleRecoveryNumber(newIndex);
            this.setState({
                value: sum,
                index: newIndex
            });
        }
    };

    // offset값 바꾸기
    changeOffset = (evt) => {
        const { value } = evt.target;
        if(value.trim() === '') {
            this.setState({offset: 0});
        } else {
            const number = parseInt(value);
            if (number) {
                this.setState({offset: Number(number)});
            }
        }
    };



    // render ( setState 이후 실행 )
    render() {
        const { index, value ,logs } = this.state;
        console.log('render',logs.length, index,logs[index],logs);
        let Equation = "Equation : 0";
        for(let i = 0; i <= index; i++) {
            Equation += logs[i] + " ";
        }
        Equation += " = ";
        return(
            <div>
                <h1>카운터</h1>
                <div>
                <p>{Equation}</p>
                </div>
                <div>
                    <button onClick={this.handleDecreaseIndex}>⬅</button>
                    &nbsp;값 : {value}&nbsp;
                    <button onClick={this.handleIncreaseIndex}>➡︎</button>
                </div>
                <div>
                    <button onClick={this.devision2}>÷2</button>
                    <button onClick={this.Decrease100}>-100</button>
                    <button onClick={this.Decrease10}>-10</button>
                    <button onClick={this.Decrease1}>-1</button>
                    <button onClick={this.Increase1}>+1</button>
                    <button onClick={this.Increase10}>+10</button>
                    <button onClick={this.Increase100}>+100</button>
                    <button onClick={this.multiplication2}>x2</button>
                </div>
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