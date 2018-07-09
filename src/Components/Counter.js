import React, { Component } from 'react';

class Counter extends Component {
    //Instant init
    // state = {
    //     number: 0,
    //     offset: 1
    // }

    // Life Cycle
    constructor(props) {
        super(props)
        console.log("Create")
        this.state = {
            number: [0],
            offset: 10,
            index:0
        }
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

    //function
    handleIcrease = () => {
        const { number, index } = this.state
        // console.log(index,number)
        this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] + 1),
            index: index + 1
        });
        console.log('funtion',index,number[index],number);
    };

    handleDecrease = () => {
        const { number, index } = this.state
        this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] - 1),
            index: index + 1
        });
    };

    handleIcreaseT = () => {
        const { number, index } = this.state
        this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] + 10),
            index: index + 1
        });
    };

    handleDecreaseT = () => {
        const { number, index } = this.state
        this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] - 10),
            index: index + 1
        });
    };

    handleIcreaseH = () => {
        const { number, index } = this.state
        this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] + 100),
            index: index + 1
        });
    };

    handleDecreaseH = () => {
        const { number, index } = this.state
       this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] - 100),
            index: index + 1
        });
    };

    handleIcreaseC = () => {
        const { number, offset, index } = this.state
        this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] + offset),
            index: index + 1
        });
    };

    handleDecreaseC = () => {
        const { number,offset, index } = this.state
       this.setState({
            number: (number.length-1 === index ? number : number.slice(0,index+1)).concat(number[index] - offset),
            index: index + 1
        });
    };

    handleDecreIndex = () => {
        const { index } = this.state
        if(index-1 >= 0) {
            this.setState({
                index: index - 1
            });
        }
    }

    handleIncreIndex = () => {
        const { number, index } = this.state
        if(index + 1 < number.length) {
            this.setState({
                index: index + 1
            });
        }
    }

    changeOffset = (evt) => {
        const { value } = evt.target;
        if((value.replace(/[0-9]/g,'') === "")) {
            this.setState({offset:Number(value)});
        }

    };


    //render
    render() {
        const { index, number } = this.state;
        console.log('render',index,number[index],number);
        return(
            <div>
                <h1>카운터</h1>
                <div><button onClick={this.handleDecreIndex}>⬅</button>
                    &nbsp;값 : {number[index]}&nbsp;
                    <button onClick={this.handleIncreIndex}>➡︎</button>
                </div>
                <button onClick={this.handleDecreaseH}>-100</button>
                <button onClick={this.handleDecreaseT}>-10</button>
                <button onClick={this.handleDecrease}>-1</button>
                <button onClick={this.handleIcrease}>+1</button>
                <button onClick={this.handleIcreaseT}>+10</button>
                <button onClick={this.handleIcreaseH}>+100</button>
                <div>
                    <br/>
                    연산값 :
                    <input type="text" value={this.state.offset} onChange={this.changeOffset} ></input>
                    <button onClick={this.handleIcreaseC}>+</button>
                    <button onClick={this.handleDecreaseC}>-</button>
                </div>
            </div>
        )
    }
}

export default Counter;