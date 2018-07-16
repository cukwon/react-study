import React, { Component } from 'react';
import Form from "../Form";
import List from "./List";

class Node extends Component {
    render () {
        const { state, comments } = this.props;
        console.log('Node',state)
        return (
            <div style={{padding:' 2px 20px'}}>
                <div className='list-wrapper'>
                    <List comments={state.get('comments')}/>
                </div>
                { state.get('Adding') &&
                    <div className='form-wrapper'>
                        <Form value={state.get('value')} btnName='등록'/>
                    </div>
                }
            </div>
        )
    }
}

export default Node;