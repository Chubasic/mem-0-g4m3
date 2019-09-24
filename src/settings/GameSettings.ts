import IGameSettings from "../interfaces/IGameSettings";
import IGameBoard from "../interfaces/IGameBoard";

export default class GameSettings implements IGameSettings {
    constructor(
        readonly level = 1,
        readonly score = 0,
        readonly totalLevels = 3,
        readonly totalMatches = 0,
        readonly board = {
            memorizedMatches: 0,
            boardSize: [4, 4]
        } as IGameBoard) {
    }
}