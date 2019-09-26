import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import uuid from 'node-uuid';
import Card from '../../components/Card/Card';
import IGameSettings from '../../interfaces/IGameSettings';
import { boardInit } from '../../util/';
import cardTypes from '../../settings/CardTypes';
import './GameBoard.scss';

const GameBoard = () => {
    const getBoardSize = ({
        reducers: { board: { boardSize } } }: IGameSettings) => { return boardSize }
    const boardSize = useSelector(getBoardSize);
    const [board, setBoard] = useState<Array<number>>([])
    useEffect(() => {
        setBoard(boardInit(boardSize));
        return () => {
        };
    }, [boardSize])
    return (
        <div className='GameBoard'>
            {board.map((element: number) => {
                return (<Card backgroundColor={cardTypes[element]} key={uuid.v4()} />)
            })}
        </div>
    )
}

export default GameBoard
