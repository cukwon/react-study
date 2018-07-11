import React, { Component } from 'react';

class Inner extends Component {

    render() {
        return (
            <div className='inner'>
                <span><button onClick={this.props.handleToggleExpand}>➤</button></span>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Inner;