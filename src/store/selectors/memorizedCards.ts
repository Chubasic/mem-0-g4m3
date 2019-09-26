import IStore from '../../interfaces/IStore';

const getMemorizedCards = ({ reducers: { memorizedCards } }: IStore) =>
    memorizedCards


export default getMemorizedCards;    