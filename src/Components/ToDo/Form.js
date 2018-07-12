import React, { Component } from 'react';
import './Form.css'

class Form extends Component {

    /**
     * Render
     * @returns {*}
     */
    render() {
        const { value, onChange, onCreate, onKeypress } = this.props;
        return (
            <div className='form'>
                <input type='text' value={value} onChange={onChange} onKeyPress={onKeypress} />
                <div className='create-button' onClick={onCreate}>추가</div>
            </div>
        )
    }
}

export default Form;