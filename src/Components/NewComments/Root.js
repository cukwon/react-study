import React, { Component } from 'react';
import Form from "./Form";
import Node from "./Node";

class Root extends Component {
    render () {
        const { data, onChange } = this.props;
        console.log('Root',data.get('id'), data );
        const CommentsList = ( data.get('comments') ? data.get('comments').map(comment => (<Node data={comment} onChange={onChange}/>)) : undefined)
        console.log(data.get('id'))
        return (
            <div className='root-wrapper' style={{padding:' 2px 10px'}}>
                { data.get('comments') &&
                    <div className='list-wrapper'>
                        {CommentsList}
                    </div>
                }
                <div className='form-wrapper'>
                    <Form id={data.get('id')} value={data.get('value')} btnName='등록' onChange={onChange} onCreate={()=> console.log('create')} onKeyPress={()=> console.log('press')}    />
                </div>
            </div>
        )
    }
}



export default Root;