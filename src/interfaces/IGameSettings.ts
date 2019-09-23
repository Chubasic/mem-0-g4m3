import ObjectIndex from './ObjectIndex';
export default interface IGameSettings extends ObjectIndex {
    level: number;
    score: number;
    gameTime: string | '00:00';
}