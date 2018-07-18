import React, { Component } from 'react';

class PhoneInfo extends Component {

    state = {
        editing:false,
        name:'',
        phone:''
    }

    handleDelete = (id) => {
        console.log(this.props)
        const { info, deleteInfo } = this.props;
        deleteInfo(info.id);
    };

    handleToggleEdit = () => {
        const{ editing } = this.state;
        this.setState({editing:!editing});
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState( {
           [name] : value
        });
    };

    componentDidUpdate(prevProps,prevState) {
        const { info, updateInfo } = this.props;
        console.log(info,updateInfo);
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name : info.name,
                phone: info.phone
            })
        }
        if (prevState.editing && !this.state.editing){
            console.log(info.id);
            updateInfo(info.id,{
                name : this.state.name,
                phone: this.state.phone
            })
        }
    }

    shouldComponentUpdate( nextProps, nextState ){
        if (!this.state.editing && !nextState.editing && this.props.info === nextProps.info) {
            return false
        }
        return true
    }

    render() {
        const style = {
            backgroundColor: 'gray',
            border:'1px solid white',
            padding:'8px',
            margin: '8px'
        };

        const { editing } = this.state;
        //console.log(editing);
        if(editing) {
            return(
            <div style={style}>
                <div>
                    <input name='name' onChange={this.handleChange} value={this.state.name} placeholder='이름' />
                </div>
                <div>
                    <input name='phone' onChange={this.handleChange} value={this.state.phone} placeholder='전화번호'/>
                </div>
                <button onClick={this.handleToggleEdit}>적용</button>
                <button onClick={this.handleDelete}>삭제</button>
            </div>
            )
        }

        const {id, name, phone} = this.props.info;

        console.log("render phoneInfo",id)
        return(
            <div style={style}>
                <div>{id} : {name} : {phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleDelete}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;