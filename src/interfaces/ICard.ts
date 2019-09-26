import StringObjectIndex from './StringObjectIndex';

export default interface ICard extends StringObjectIndex {
    type: number;
    backgroundColor: string;
    hidden: boolean;
}
