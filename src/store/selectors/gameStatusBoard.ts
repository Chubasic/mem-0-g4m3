
import IStore from '../../interfaces/IStore';


const getSelected = ({ gameReducer: { compare } }: IStore) => {
    return compare;
};

const getLevelStatus = ({ gameReducer: { board: { memorizedMatches }, totalMatches } }: IStore) => {
    return totalMatches ? memorizedMatches === totalMatches : false;
};

const getLevelData = ({
    gameReducer: { level, score, totalLevels, levelTime } }: IStore) => ({ level, score, totalLevels, levelTime });





export {
    getSelected,
    getLevelData,
    getLevelStatus,
};
