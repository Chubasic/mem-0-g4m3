import ObjectIndex from './ObjectIndex';
export default interface IPic extends ObjectIndex {
    type: number;
    img: string;
    hidden: boolean;
}