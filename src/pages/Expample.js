import React from 'react';
import { Link } from 'react-router-dom';
import MyName from "../components/Expample/Myname";
import NaviButton from "../components/basic/NaviButton";

const Expample = () => {
    return (
        <div>
            <div className='Treeview'>
                <MyName/>
                <MyName name='홍길동'/>
                <MyName name='각시탈'/>
                <MyName name='권찬울'/>
                <MyName name='김태희'/>
                <MyName name='장동건'/>
            </div>
            <div>
                <NaviButton name='뒤로가기' url='/'/>
            </div>
        </div>
    )
};

export default Expample;