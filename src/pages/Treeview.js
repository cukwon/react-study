import React from 'react';
import { Link } from 'react-router-dom';
import TreeView from "../components/TreeView/TreeView";

const Treeviews = () => {
    return (
        <div>
            <div className='Treeview'>
                <TreeView/>
            </div>
            <div>
                <Link to="/">뒤로가기</Link>
            </div>
        </div>
    )
};

export default Treeviews;