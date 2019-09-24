import * as actionTypes from '../../actions/gameBoard/actionTypes'
import IGameSettings from '../../../interfaces/IGameSettings';
const initialState: IGameSettings = {
    level: 1,
    score: 0,
    totalLevels: 3,
    totalMatches: 0,
    board: {
        memorizedMatches: 0,
        boardSize: [4, 4]
    }
}

export default (state = initialState, { type, payload }: any) => {
    switch (type) {

        case actionTypes.CONFIRM_MATCH:
            return { ...state, memorizedMatches: state.board.memorizedMatches++ }
        case actionTypes.INIT_LEVEL:
            return { ...payload }
        default:
            return state
    }
}

