import ObjectIndex from './ObjectIndex';
import IGameBoard from './IGameBoard';
export default interface IGameSettings extends ObjectIndex {
    level: number;
    score: number;
    readonly totalLevels: number;
    readonly totalMatches: number;
    board: IGameBoard
}