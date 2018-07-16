import React, { Component } from 'react';
import Node from "./Node";

class Comment extends Component {
    render() {
        const { state, comment, comments } = this.props;
        console.log('Comment',state);
        return(
            <div>
                <div className='text-wrapper' style={{ border: '1px solid #22b8cf'}}>
                    {state.get('comment')}
                </div>
                <div className='node-wrapper'>
                    <Node state={state}/>
                </div>
            </div>
        )
    }
}

export default Comment;