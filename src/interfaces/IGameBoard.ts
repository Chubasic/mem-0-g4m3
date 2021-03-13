import StringObjectIndex from './StringObjectIndex';
export default interface IGameBoard extends StringObjectIndex {
    memorizedMatches: number;
    boardSize: number;
}
