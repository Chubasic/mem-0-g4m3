import * as actionTypes from '../actions/actionTypes'
import IGameSettings from '../../interfaces/IGameSettings';
const initialState: IGameSettings = {
    level: 0,
    score: 0,
    totalLevels: 0,
    totalMatches: 0,
    board: {
        memorizedMatches: 0,
        boardSize: 4
    }
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case actionTypes.CONFIRM_MATCH:
            return { ...state, memorizedMatches: state.board.memorizedMatches++ }
        case actionTypes.INIT_LEVEL:
            return { ...payload }
        case actionTypes.NEXT_LEVEL:
            return { ...state, level: state.level++ }
        default:
            return state
    }
}
