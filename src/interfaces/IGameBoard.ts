import ObjectIndex from './ObjectIndex';
export default interface IGameBoard extends ObjectIndex {
    memorizedMatches: number;
    boardSize: [number, number];
}