import IStore from '../../interfaces/IStore';


const getBoardSize = ({
    gameReducer: { board: { boardSize } } }: IStore) => boardSize;


const getCurrentLevel = ({ gameReducer: { level } }: IStore) => level;


export {
    getBoardSize,
    getCurrentLevel
};


