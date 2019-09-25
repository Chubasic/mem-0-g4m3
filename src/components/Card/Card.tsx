import React, { FunctionComponent } from 'react'
import './Card.scss';

interface CardPropTypes {
    backgroundColor: string;
}

const Card: FunctionComponent<CardPropTypes> = ({ backgroundColor }) => {
    return (
        <div className='Card' style={{ backgroundColor }}>

        </div>
    )
}

export default Card
