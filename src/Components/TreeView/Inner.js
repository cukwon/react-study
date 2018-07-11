import React, { Component } from 'react';

class Inner extends Component {

    constructor(props) {
        super(props);
        console.log("inner",this.props)
        this.state = {
            name : this.props.name
        }
    }

    render() {
        const style = {
            backgroundColor:'#000000',
            color:'#fcfffe',
            fontsize:'10px',
            fontWeight:'bold',
            height:'15px',
            width:'30px'
        };
        return (
            <div className='inner'>
                <span><button style={style} onClick={() => this.props.toggleExpand()}>{this.props.isExpand ? "∨" : ">" }</button></span>
                <span>&nbsp;{this.state.name}</span>
            </div>
        )
    }
}

export default Inner;