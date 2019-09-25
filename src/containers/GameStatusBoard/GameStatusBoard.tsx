import React from 'react';
import './GameStatusBoard.scss';
import TextItem from '../../components/TextItem/TextItem';
import { useSelector } from 'react-redux';
import IGameSettings from '../../interfaces/IGameSettings';

const GameStatusBoard = () => {
    const getLevelStatus = ({
        reducers: { level, score, totalLevels } }: IGameSettings) => { return { level, score, totalLevels } }
    const levelData = useSelector(getLevelStatus);
    return (
        <div className='GameStatusBoard'>
            <TextItem {...{ headingText: "Level", text: `${levelData.level}/${levelData.totalLevels}` }} />
            <TextItem {...{ headingText: "Score", text: levelData.score.toString() }} />
            <TextItem {...{ headingText: "Time", text: "00:00" }} />
        </div>
    )
}

export default GameStatusBoard
