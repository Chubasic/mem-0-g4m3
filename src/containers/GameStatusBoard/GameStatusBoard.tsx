import React from 'react';
import { useSelector } from 'react-redux';
import IGameSettings from '../../interfaces/IGameSettings';
import Clock from '../../components/Clock/Clock';
import TextItem from '../../components/TextItem/TextItem';
import './GameStatusBoard.scss';

const GameStatusBoard = () => {
    const getLevelStatus = ({
        reducers: { level, score, totalLevels, levelTime } }: IGameSettings) => { return { level, score, totalLevels, levelTime } }
    const levelData = useSelector(getLevelStatus);
    return (
        <div className='GameStatusBoard'>
            <TextItem {...{ headingText: "Level", text: `${levelData.level}/${levelData.totalLevels}` }} />
            <TextItem {...{ headingText: "Score", text: levelData.score.toString() }} />
            <Clock deadline={levelData.levelTime} />
        </div>
    )
}

export default GameStatusBoard
