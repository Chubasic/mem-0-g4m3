
import IGameBoard from './IGameBoard';
import StringObjectIndex from './StringObjectIndex';
export default interface IGameSettings extends StringObjectIndex {
    level: number;
    score: number;
    levelTime: number;
    readonly totalLevels: number;
    readonly totalMatches: number;
    board: IGameBoard;
}
