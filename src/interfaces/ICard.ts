import ObjectIndex from './ObjectIndex';
export default interface ICard extends ObjectIndex {
    type: number;
    img: string;
    hidden: boolean;
}