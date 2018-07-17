import React, { Component } from 'react';
import Form from "./Form";

class Node extends Component {
    render () {
        const { data, onChange, onDelete, onToggle, onCreate, onKeyPress } = this.props;
        //console.log('Node',data );
        const CommentsList = ( data.get('comments') ?
            data.get('comments').map(comment => (<Node data={comment} onChange={onChange} onDelete={onDelete} onToggle={onToggle} onCreate={onCreate} onKeyPress={onKeyPress}/>)) :
            undefined );
        return (
            <div className='Node-wrapper' style={{padding:'2px 0 2px 20px'}}>
                <div className='comment-wrapper' style={{padding:'2px 15px'}}>
                    <div className='text-wrapper' style={{padding:'2px 10px',border: '1px solid #22b8cf'}}>
                        <span>{data.get('comment')}&nbsp;</span>
                        <span><button onClick={()=>{onToggle(data.get('id'))}}>댓글</button></span>
                        <span style={{float:"right"}}><button onClick={() => onDelete(data.get('id'))}>삭제</button></span>
                    </div>
                </div>
                { data.get('comments') &&
                    <div className='list-wrapper'>
                        {CommentsList}
                    </div>
                }
                { data.get('Adding') &&
                <div className='form-wrapper'>
                    <Form id={data.get('id')} value={data.get('value')} onChange={onChange} btnName='등록' onCreate={onCreate} onKeyPress={onKeyPress}/>
                </div>
                }
            </div>
        )
    }
}



export default Node;