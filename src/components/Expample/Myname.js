import React from 'react';

const MyName = ({name}) => {
    return (
        <div>
            안녕하세요! 제 이름은 <b>{name}</b>입니다.
        </div>
    )
}

// class MyName extends React.Component {
//     // static defaultProps = {
//     //     name : 'Default'
//     // }
//     render() {
//         return (
//             <div>
//                 안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
//             </div>
//         );
//     }
// }
  MyName.defaultProps = {
        name : 'Default'
    }

export default MyName;