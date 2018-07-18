import React from 'react';
import './css/Palette.css';

/**
 * 색이 들어가 박스 컴포넌트
 */
const Color = ({ color, active, onClick }) => {
    //console.log(color,active,onClick)
    const style = {
        background: color
    };
    //console.log("render color",color ,":",style)
    return(
        <div className={"color " + ( active ? "active" : "false" )} style={style} onClick={() => onClick(color)}/>

    )
};

/**
 *  여러 색을 모아서 보여주는 컴포넌트
 */
const Palette = ({colors, selected, onSelect}) => {
   // console.log(colors, selected, onSelect);
    console.log("render Platte");

    const list = colors.map(color => (<Color key={color} color={color} active={color === selected ? true : false} onClick={onSelect}/>))
    return (
        <div className='palette'>
            {list}
        </div>
    )
};

export default Palette;