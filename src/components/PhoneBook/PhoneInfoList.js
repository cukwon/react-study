import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo'

class PhoneInfoList extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.phoneInfoList !== this.props.phoneInfoList;
    }

    render() {
        console.log("render PhoneInfoList")
        const { phoneInfoList, deleteInfo, updateInfo} = this.props;
        const list = phoneInfoList.map(info=>(<PhoneInfo key={info.id} info={info} deleteInfo={deleteInfo} updateInfo={updateInfo}/>));
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList;