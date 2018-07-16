import React, { Component } from 'react';
import Form from "../Form";
import Node from "./Node";

class Root extends Component {
    render () {
        const { data } = this.props;
        console.log('Node',data );
        const CommentsList = ( data.get('comments') ? data.get('comments').map(comment => (<Node data={comment} />)) : undefined)
        return (
            <div className='root-wrapper' style={{padding:' 2px 10px'}}>
                { data.get('comments') &&
                    <div className='list-wrapper'>
                        {CommentsList}
                    </div>
                }
                <div className='form-wrapper'>
                    <Form value={data.get('value')} btnName='등록'/>
                </div>
            </div>
        )
    }
}
const Comment = ({ data }) => {
    console.log('comment', data)
    return (
        <div></div>
    )
};


export default Root;