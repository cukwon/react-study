import React from 'react';
import { Link } from 'react-router-dom';
import TreeView from "../components/TreeView/TreeView";
import NaviButton from "../components/basic/NaviButton";

const Treeviews = () => {
    return (
        <div>
            <div className='Treeview'>
                <TreeView/>
            </div>
            <div>
                <NaviButton name='뒤로가기' url='/'/>
            </div>
        </div>
    )
};

export default Treeviews;