import IGameSettings from "../interfaces/IGameSettings";
import IGameBoard from "../interfaces/IGameBoard";

export default class GameSettings implements IGameSettings {
    constructor(
        readonly board = {
            memorizedMatches: 0,
            boardSize: 4
        } as IGameBoard,
        readonly level = 1,
        readonly score = 0,
        readonly totalLevels = 3,
        readonly totalMatches = (Math.floor(Math.pow(board.boardSize, 2)) / 2)
    ) {
    }
}