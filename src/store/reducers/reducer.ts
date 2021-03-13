import * as actionTypes from '../actions/actionTypes';
import IStore from '../../interfaces/IStore';
const initialState: IStore = {
    level: 0,
    compare: [],
    memorizedCards: [],
    score: 0,
    totalLevels: 0,
    totalMatches: 0,
    levelTime: 0,
    board: {
        memorizedMatches: 0,
        boardSize: 0
    },
};

export const gameReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case actionTypes.INIT_LEVEL:
            return { ...state, ...payload, memorizedCards: [] };

        case actionTypes.CONFIRM_MATCH:
            return {
                ...state,
                memorizedMatches: state.board.memorizedMatches++,
                compare: [],
                score: state.score + 150
            };

        case actionTypes.NO_MATCH:
            return {
                ...state,
                memorizedCards: [...payload],
                compare: []
            };

        case actionTypes.NEXT_LEVEL:
            return {
                ...state,
                ...payload,
                level: ++state.level,
                score: state.score,
                memorizedCards: []
            };

        case actionTypes.SELECT_CARD:
            return {
                ...state,
                compare: [...state.compare, payload.compare],
                memorizedCards: [...payload.memorizedCards]
            };

        default:
            return state;
    }
};
