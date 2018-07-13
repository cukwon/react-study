import React, { Component } from 'react';
import './css/Form.css'

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
        const { value, onChange, onCreate, onKeyPress } = this.props;
        return (
            <div className='form'>
                <input type='text' value={value} onChange={onChange} onKeyPress={onKeyPress} />
                <div className='create-button' onClick={onCreate}>추가</div>
            </div>
        )
    }
}

export default Form;