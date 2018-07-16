import React, { Component } from 'react';
import './css/Form.css'

/**
 *  댓글을 추가하는 컴포넌트
 */
class Form extends Component {

    /**
     * Render
     * @returns {*}
     */
    render() {
        const { id, value, btnName, onChange, onCreate, onKeyPress } = this.props;
        console.log("render Form", id);
        return (
            <div className='form'>
                <input type='text' value={value} onChange={(e) => onChange(id,e)} onKeyPress={onKeyPress} />
                <div className='create-button' onClick={onCreate}>{btnName}</div>
            </div>
        )
    }
}

export default Form;