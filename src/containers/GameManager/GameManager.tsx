import React, { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Menu from '../../components/Menu/Menu';
import Button from '../../components/Button/Button';
import checkEndGame from '../../store/selectors/gameManger';
import GameSettings from '../../settings/GameSettings';

const GameManager: FunctionComponent = () => {
    const [submitType, setSubmitType] = useState();
    const endGame = useSelector(checkEndGame);
    const gameManagerActions = useDispatch();
    useEffect(() => {
        if (submitType) {
            gameManagerActions({
                type: submitType,
                payload: new GameSettings(),
            });
        }
        return () => {

        };
    }, [submitType]);


    if (endGame) {
        return (
            <Menu headingText='Congrats! You ended the game.'>
                <Button
                    btnText='Okay, play again'
                    onClickAction={setSubmitType}
                    dispatchAction={actionTypes.INIT_LEVEL}
                />
            </Menu>
        );
    }

    return (
        <div></div>
    );
};

export default GameManager;
