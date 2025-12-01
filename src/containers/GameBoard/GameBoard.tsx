import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardSize, getCurrentLevel } from '../../store/selectors/gameBoard';
import getMemorizedCards from '../../store/selectors/memorizedCards';
import * as actionTypes from '../../store/actions/actionTypes';
import { v4 as uuid } from 'uuid';
import Card from '../../components/Card/Card';
import { boardInit } from '../../util/';
import cardTypes from '../../settings/CardTypes';
import './GameBoard.scss';

const GameBoard = () => {
    const boardSize = useSelector(getBoardSize);
    const currentLevel = useSelector(getCurrentLevel);
    const selectedCards = useSelector(getMemorizedCards);
    const gameBoardActions = useDispatch();
    const [board, setBoard] = useState<number[]>([]);
    useEffect(() => {
        setBoard(boardInit(boardSize));
        return () => {
        };
    }, [boardSize, currentLevel]);

    function selectCard(cardType: number, cardIndex: number): void {
        gameBoardActions({
            type: actionTypes.SELECT_CARD,
            payload: { compare: cardType, memorizedCards: [...selectedCards, cardIndex] }
        });

    }

    return (
        <div className='GameBoard'>
            {board.map((element: number, index: number) => {
                const cardSelected = selectedCards.includes(index);
                return (<Card
                    clickAction={!cardSelected ? selectCard : undefined}
                    backgroundColor={cardTypes[element]}
                    type={element}
                    hidden={
                        cardSelected ?
                            false : true
                    }
                    id={index}
                    key={uuid()} />);
            })}
        </div>
    );
};

export default GameBoard;
