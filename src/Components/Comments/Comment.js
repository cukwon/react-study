import React, { Component } from 'react';
import Node from "./Node";

class Comment extends Component {
    render() {
        const { key, state, comment, comments } = this.props;
        console.log('Comment', key,state);
        return(
            <div>
                <div className='text-wrapper' style={{ border: '1px solid #22b8cf'}}>
                    <span>{state.get('comment')}&nbsp;</span>
                    <span><button>댓글</button></span>
                    <span style={{float:"right"}}><button>삭제</button></span>
                </div>
                <div className='node-wrapper'>
                    <Node state={state}/>
                </div>
            </div>
        )
    }
}

export default Comment;