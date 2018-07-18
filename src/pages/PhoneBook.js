import React from 'react';
import { Link } from 'react-router-dom';
import PhoneBookC from "../components/PhoneBook/PhoneBook";
import NaviButton from "../components/basic/NaviButton";

const PhoneBook = () => {
    return (
        <div>
            <div className='Todolist'>
                <PhoneBookC/>
            </div>
            <div>
                <NaviButton name='뒤로가기' url='/'/>
            </div>
        </div>
    )
};

export default PhoneBook;