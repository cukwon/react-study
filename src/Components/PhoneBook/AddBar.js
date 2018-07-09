import React, { Component } from 'react';

class AddBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:"",
            phone:""
        }
    }

    handleChange = (e) => {
        let newValue;
        const { name, value } = e.target;
        console.log(name, " : ",value);
        if(name === 'phone') {
            console.log('Change PhoneNumber');
            newValue = value.replace(/[^0-9]/ig,'').substring(0,11)
        } else {
            newValue = value
        }

        this.setState({
            [name]: newValue
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target)
        if(e.target.name.value !== "" && e.target.phone.value !== "") {
            this.props.createInfo({
                name: this.state.name,
                phone: this.handlePhoneNumber(this.state.phone)
            });
            this.setState({
                name:"",
                phone:""
            });
            console.log(this.state.name, " : ", this.state.phone);
        }
    };

    handlePhoneNumber = (phone) => {
        switch (phone.length) {
            case 0:
                return "";
            case 1: case 2: case 3:
                return phone;
            case 4: case 5: case 6: case 7:
                return phone.substring(0,3) + "-" + phone.substring(3);
            case 8: case 9: case 10: case 11:
                return phone.substring(0,3)+"-"+phone.substring(3,7)+"-"+phone.substring(7);
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextState !== this.state;
    }

    render() {
        console.log("render AddBar");
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' value={this.state.name === ""? "" :this.state.name} onChange={this.handleChange} placeholder="이름"/>
                    <input type='text' name='phone' value={this.handlePhoneNumber(this.state.phone)} onChange={this.handleChange} placeholder="전화번호(숫자만)"/>
                    <button type='submit' name='add'>추가</button>
                </form>
            </div>
        )
    }
}

export default AddBar;