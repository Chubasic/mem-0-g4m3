import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLevelData, getSelected, getLevelStatus } from '../../store/selectors/gameStatusBoard';
import getMemorizedCards from '../../store/selectors/memorizedCards';
import * as actionTypes from '../../store/actions/actionTypes';
import Clock from '../../components/Clock/Clock';
import TextItem from '../../components/TextItem/TextItem';
import './GameStatusBoard.scss';
import GameSettings from '../../settings/GameSettings';


const GameStatusBoard = () => {
    const levelData = useSelector(getLevelData);
    const compare = useSelector(getSelected);
    const nextLevel = useSelector(getLevelStatus);
    const selectedCards = useSelector(getMemorizedCards);
    const gameStatusActions = useDispatch();
    useEffect(() => {
        function compareSelected(): void {
            if (compare[0] === compare[1]) {
                gameStatusActions({ type: actionTypes.CONFIRM_MATCH });
            } else {
                gameStatusActions({
                    type: actionTypes.NO_MATCH,
                    payload: selectedCards.slice(0, -2)
                });

            }
        }
        if (compare.length === 2) {
            compareSelected();
        }
        if (nextLevel) {
            gameStatusActions({
                type: actionTypes.NEXT_LEVEL,
                payload: new GameSettings()
            });
        }
        return () => {

        };
    }, [compare, nextLevel]);


    return (

        <div className='GameStatusBoard'>
            <TextItem {...{ headingText: 'Level', text: `${levelData.level}/${levelData.totalLevels}` }} />
            <TextItem {...{ headingText: 'Score', text: levelData.score.toString() }} />
            <Clock deadline={levelData.levelTime} />
        </div>
    );
};

export default GameStatusBoard;
