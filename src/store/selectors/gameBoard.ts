import IStore from '../../interfaces/IStore';

const getBoardSize = ({
    reducers: { board: { boardSize } } }: IStore) => boardSize;


const getCurrentLevel = ({ reducers: { level } }: IStore) => level;


export {
    getBoardSize,
    getCurrentLevel
};
