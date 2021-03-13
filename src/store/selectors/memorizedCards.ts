import IStore from '../../interfaces/IStore';

const getMemorizedCards = ({ gameReducer: { memorizedCards } }: IStore) =>
    memorizedCards;


export default getMemorizedCards;
