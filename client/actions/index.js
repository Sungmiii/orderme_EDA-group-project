
export const RECEIVE_LEVEL = 'RECEIVE_LEVEL'
export const RESET_GAME = 'RESET_GAME'
export const DRAG_ITEM = 'DRAG_ITEM'
export const DROP_ITEM = 'DROP_ITEM'
export const GAME_HAS_RESET = 'GAME_HAS_RESET'
export const CLEAR_GOAl = 'CLEAR_GOAl'


export const receiveLevel = (level) => {
    return {
        type: RECEIVE_LEVEL,
        level: level
    }
}

export const resetGame = () => {
    return {
        type: RESET_GAME
    }
}

export const resetComplete = () => {
    return {
        type: GAME_HAS_RESET
    }
}

export const dragItem = () => {
    return {
        type: DRAG_ITEM
    }
}

export const dropItem = (target, item) => {
    return {
        type: DROP_ITEM,
        target: target,
        item: item
    }
}
export const clearGoals = (newState, item) => {
    return {
        type: CLEAR_GOAl,
        newState: newState
    }
}