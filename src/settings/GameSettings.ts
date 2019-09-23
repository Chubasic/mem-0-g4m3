import IGameSettings from "../interfaces/IGameSettings";

export default class GameSettings implements IGameSettings {
    constructor(
        readonly level = 1,
        readonly score = 0,
        readonly gameTime = '00:00') {
    }
}