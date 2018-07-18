import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";

const Home = () => {
    const style = {
        position: 'fixed',
        left: '0',
        top: '50%',
        width: '8em',
        marginTop: '-2.5em'
    }
    return (
        <div>
            <Navigation/>
        </div>
    );
};

export default Home;