import React from 'react';
import Sprite from '../../../Assets/img/sprite.svg'

const SVG = (props) => {
    return (
        <span className="flex nogap">
            <svg className='svg'>
                <use href={`${Sprite}${props.urlId}`}></use>
            </svg>
            <span className='svg-text'> {props.value} <br /> {props.valueType}</span>
        </span>
    );
}

export default SVG;