import React, { Component } from 'react';
import { Map, List } from 'immutable';
import NaviButton from "./basic/NaviButton";

class Navigation extends Component {

    id = 1;
    state = {
        data: List([
            Map({ name:"Home", url:"/"}),
            Map({ name:"Example", url:"/example"}),
            Map({ name:"Counter", url:"/counter"}),
            Map({ name:"Comments", url:"/comments"}),
            Map({ name:"PhoneBook", url:"/phonebook"}),
            Map({ name:"TodoList", url:"/todolist"}),
            Map({ name:"Treeview", url:"/treeview"})
        ])
    };

    render () {
        const style = {
            position: 'fixed',
            left: '0',
            top: '50%',
            width: '8em',
            marginTop: '-2.5em'
        };

        const NaviList = this.state.data.map(item=>(<NaviButton key={this.id++} name={item.get('name')} url={item.get('url')} />));

        return (
            <div style={style} className='Navigation'>
                {NaviList}
            </div>
        )
    }
}

export default Navigation;