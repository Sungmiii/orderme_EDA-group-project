import { RESET_GAME, GAME_HAS_RESET } from '../actions'



function resetRedcuer(state = false, action) {
    switch (action.type) {
        case RESET_GAME:
            return true
        case GAME_HAS_RESET:
            return false
        default:
            return state
    }
}

export default resetRedcuer 