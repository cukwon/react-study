import React, { Component } from 'react';
import AddBar from './AddBar';
import SearchBar from './SearchBar';
import PhoneInfoList from './PhoneInfoList';

class PhoneBook extends Component {
    // state = {
    //     id:0,
    //     // name:"",
    //     // phone:"",
    //     phoneInfoList:[]
    // }

    constructor(props) {
        super(props);
        this.state={
            id: 0,
            keyword:'',
            phoneInfoList: []
        }
    };

    handleCreate = (data) => {
        const {phoneInfoList} = this.state;
        let overlapFlag = false;
        //console.log(phoneInfoList);
        phoneInfoList.forEach((item) => {
            //console.log(item,data)
            if(item.name === data.name) {
                //console.log("중복");
                overlapFlag = true;
            }
        })
        if (overlapFlag === false) {
                this.setState({
                    phoneInfoList: phoneInfoList.concat({id: ++this.state.id, ...data})
                })
            }
    };

    handleDelete = (id) => {
        const {phoneInfoList} = this.state;
        //console.log(phoneInfoList.filter(info=>info.id !== id))
        this.setState({
            phoneInfoList: phoneInfoList.filter(info=>info.id !== id)
        })
    };

    handleUpdate = (id, data) => {
        const {phoneInfoList} = this.state;
        this.setState({
            phoneInfoList: phoneInfoList.map(
                info => id === info.id
                    ? { ...info, ...data }
                    : info
            )
        })
    };

    handleKeyword = (keyword) => {
        //console.log(keyword)
        this.setState({
            keyword: keyword
        })
    };

    handleList = (keyword) => {
        if(this.state.keyword === "") {
            return this.state.phoneInfoList
        } else {
            return this.state.phoneInfoList.filter((el) => {
                //console.log("el",el);
                return el.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
            })
            // return this.state.phoneInfoList.filter(info => info.name === keyword)
        }
    };

    render() {
        console.log("render phoneBook")
        //console.log(this.state);
        //console.log(this.handleList(this.state.keyword));
        return(
            <div>
                <h1>전화번호부</h1>
                <div>
                    <AddBar  createInfo={this.handleCreate}/>
                    <br/>
                    <SearchBar keyword={this.state.keyword} keywordUpdate={this.handleKeyword} />
                    <br/>
                    <PhoneInfoList phoneInfoList = {this.handleList(this.state.keyword)} deleteInfo={this.handleDelete} updateInfo={this.handleUpdate}/>
                </div>
            </div>
        )
    }
}

export default PhoneBook;