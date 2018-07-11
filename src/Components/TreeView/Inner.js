import React, { Component } from 'react';

class Inner extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        console.log("inner",this.props)
        this.state = {
            name : this.props.name
        }
    }

    /**
     * Render
     * @returns {*}
     */
    render() {
        const btnStyle = {
            backgroundColor:'#000000',
            color:'#fcfffe',
            fontsize:'10px',
            fontWeight:'bold',
            height:'15px',
            width:'30px'
        };
        return (
            <div className='inner' onClick={() => this.props.toggleExpand()}>
                <span><button style={btnStyle} >{this.props.isExpand ? "∨" : ">" }</button></span>
                <span>&nbsp;{this.state.name}</span>
            </div>
        )
    }
}

export default Inner;