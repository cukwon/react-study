import React from 'react';
import './css/Palette.css';

const Color = ({ color, active, onClick }) => {
    //console.log(color,active,onClick)
    const style = {
        background: color
    };
    console.log("render color",color ,":",style)
    return(
        <div className={"color " + ( active ? "active" : "false" )} style={style} onClick={() => onClick(color)}/>

    )
};

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