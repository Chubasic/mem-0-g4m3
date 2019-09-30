import { createSelector } from 'reselect';
import IStore from '../../interfaces/IStore';

const checkEndGame = createSelector(
    [({ gameReducer }: IStore) => gameReducer.level, ({ gameReducer }: IStore) => gameReducer.totalLevels],
    (level, totalLevels) => level > totalLevels);

export default checkEndGame;
