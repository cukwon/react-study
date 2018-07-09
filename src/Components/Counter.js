import React, { Component } from 'react';

class Counter extends Component {
    //Instant init
    // state = {
    //     number: 0,
    //     offset: 1
    // }

    // Life Cycle ( 생성자 )
    constructor(props) {
        super(props);
        console.log("Create");
        this.state = {
            number: [0],
            offset: 10,
            index:0
        };
        // 증가 함수
        this.Increase100 = this.handleAddNumber.bind(this, 100);
        this.Increase10 = this.handleAddNumber.bind(this, 10);
        this.Increase1 = this.handleAddNumber.bind(this, 1);
        // 감소 함수
        this.Decrease100 = this.handleAddNumber.bind(this, -100);
        this.Decrease10 = this.handleAddNumber.bind(this, -10);
        this.Decrease1 = this.handleAddNumber.bind(this, -1);

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

    // index와 offset이 변해야 re-render
    shouldComponentUpdate(prevProps,prevState) {
        console.log(prevState == this.state);
        if(prevState.index === this.state.index && prevState.offset === this.state.offset) {
            return false
        }
        return true
    }

    // number 배열에 index의 값에 offset만큼 더한후 추가
    handleAddNumber = (offset) => {
        const { number, index } = this.state;
        this.setState({
            // number: ( index === number.length-1 ? number : number.slice(0,index+1)).concat(number[index] + offset),
            index: (index === number.length-1 ? number : number.slice(0,index+1)).push(number[index] + offset) - 1
        }, () => {
            console.log(this.state.index, this.state.number)
        });
    }

    // 이전 계산값 불러오기 ( index 조정 )
    handleDecreaseIndex = () => {
        const { index } = this.state
        if(index > 0) {
            this.setState({
                index: index - 1
            });
        }
    }

    // 이후 계산값 불러오기 ( index 조정 )
    handleIncreaseIndex = () => {
        const { number, index } = this.state
        if(index < number.length - 1) {
            this.setState({
                index: index + 1
            });
        }
    }

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
        const { index, number } = this.state;
        console.log('render',index,number[index],number);
        // const Equation = "Equation : 0";
        // for(int i; i < number)
        return(
            <div>
                <h1>카운터</h1>
                <div>
                    <p>{Equation}</p>
                </div>
                <div>
                    <button onClick={this.handleDecreaseIndex}>⬅</button>
                    &nbsp;값 : {number[index]}&nbsp;
                    <button onClick={this.handleIncreaseIndex}>➡︎</button>
                </div>
                <div>
                    <button onClick={this.Decrease100}>-100</button>
                    <button onClick={this.Decrease10}>-10</button>
                    <button onClick={this.Decrease1}>-1</button>
                    <button onClick={this.Increase1}>+1</button>
                    <button onClick={this.Increase10}>+10</button>
                    <button onClick={this.Increase100}>+100</button>
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