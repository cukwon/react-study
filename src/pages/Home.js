import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Header from "../components/Header";

const Home = () => {
    const style = {
        position: 'fixed',
        left: '0',
        top: '50%',
        width: '8em',
        marginTop: '-2.5em'
    }
    return (
        <div className='home-template'>
            <div className='header-wrapper'>
                <Header/>
            </div>
            <div className='container-wrapper'>
                <div className='navi-wrapper'>
                    <Navigation/>
                </div>
                <div className='contents-wrapper'>

                </div>
            </div>
            <div className='fotter-wrapper'>

            </div>
        </div>
    );
};

export default Home;