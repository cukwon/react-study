import React from 'react';
import { NavLink } from 'react-router-dom';

class NaviButton extends React.Component {
    render () {
        const style = {
            padding: '0.5rem',
            margin: '1rem 0.5rem',
            background: '#82c91e',
            borderRadius: '3px',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
        }
        const { name, url } = this.props;
        return (
            <div className='naviButton' style={style}>
                <NavLink to={url}>{name}</NavLink>
            </div>

        );
    }
};

export default NaviButton;