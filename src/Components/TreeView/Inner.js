import React, { Component } from 'react';

class Inner extends Component {
    
    render() {
        return (
            <span>{this.props.name}</span>
        )
    }
}

export default Inner;