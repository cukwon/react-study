import React, { Component } from 'react';
import './ToDo/css/Form.css'

/**
 *  할일을 추가하는 컴포넌트
 */
class Form extends Component {

    /**
     * Render
     * @returns {*}
     */
    render() {
        console.log("render Form");
        const { value, btnName, onChange, onCreate, onKeyPress } = this.props;
        return (
            <div className='form'>
                <input type='text' value={value} onChange={onChange} onKeyPress={onKeyPress} />
                <div className='create-button' onClick={onCreate}>{btnName}</div>
            </div>
        )
    }
}

export default Form;