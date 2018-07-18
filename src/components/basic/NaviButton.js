import React from 'react';
import { Link } from 'react-router-dom';

class NaviButton extends React.Component {
    render () {
        const style = {
            padding: '0.5rem',
            margin: '1rem 0.5rem',
            background: '#22b8cf',
            borderRadius: '3px',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
        }
        const { name, url } = this.props;
        return (
            <div className='naviButton' style={style}>
                <button style={}>
                    <Link to={url}>{name}</Link>
                </button>
            </div>
        );
    }
};

export default NaviButton;