
export const RECEIVE_LEVEL = 'RECEIVE_LEVEL'
export const RESET_GAME = 'RESET_GAME'
export const DRAG_ITEM = 'DRAG_ITEM'
export const DROP_ITEM = 'DROP_ITEM'

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

export const dragItem = () => {
    return {
        type: DRAG_ITEM
    }
}

export const dropItem = () => {
    return {
        type: DROP_ITEM
    }
}