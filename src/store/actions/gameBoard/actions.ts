import * as actionTypes from './actionTypes';
import IGameSettings from '../../../interfaces/IGameSettings';


export const initBoard = (payload: IGameSettings) => ({
    type: actionTypes.INIT_LEVEL,
    payload
})

