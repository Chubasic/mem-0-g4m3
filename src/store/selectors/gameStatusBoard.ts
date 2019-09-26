import IStore from '../../interfaces/IStore';


const getSelected = ({ reducers: { compare } }: IStore) => {
    return compare;
};

const getLevelStatus = ({ reducers: { board: { memorizedMatches }, totalMatches } }: IStore) => {
    return totalMatches ? memorizedMatches === totalMatches : false;
};

const getLevelData = ({
    reducers: { level, score, totalLevels, levelTime } }: IStore) => ({ level, score, totalLevels, levelTime });



export {
    getSelected,
    getLevelData,
    getLevelStatus
};
