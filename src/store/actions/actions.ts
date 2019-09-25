import * as actionTypes from './actionTypes';
import IGameSettings from '../../interfaces/IGameSettings';


export const initBoard = (payload: IGameSettings) => ({
    type: actionTypes.INIT_LEVEL,
    payload
})

export const nextLevel = (payload: any) => ({
    type: actionTypes.NEXT_LEVEL,
    payload
})


