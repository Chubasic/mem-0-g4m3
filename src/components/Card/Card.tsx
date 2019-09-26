import React, { FunctionComponent } from 'react';
import ICard from '../../interfaces/ICard';
import './Card.scss';
import '../../animations/flip.scss';

interface CardPropTypes extends ICard {
    id: number;
    clickAction: (type: number, itemIndex: number) => any;
}

const Card: FunctionComponent<CardPropTypes> = ({
    backgroundColor,
    hidden,
    id,
    type,
    clickAction }) => {
    return (
        <div
            onClick={() => clickAction(type, id)}
            id={id.toString()}
            className={`Card ${!hidden ? 'flip-bl' : 'flip-tr'}`}
            style={hidden ?
                { backgroundColor: '#4d1933' } :
                { backgroundColor }} />

    );
};

export default Card;
