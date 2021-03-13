import IGameSettings from './IGameSettings';
export default interface IStore extends IGameSettings {
    compare: number[],
    memorizedCards: number[];
}