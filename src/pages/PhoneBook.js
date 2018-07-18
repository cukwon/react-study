import React from 'react';
import { Link } from 'react-router-dom';
import PhoneBookC from "../components/PhoneBook/PhoneBook";

const PhoneBook = () => {
    return (
        <div>
            <div className='Todolist'>
                <PhoneBookC/>
            </div>
            <div>
                <Link to="/">뒤로가기</Link>
            </div>
        </div>
    )
};

export default PhoneBook;