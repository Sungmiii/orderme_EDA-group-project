import { DROP_ITEM, CLEAR_GOAl } from '../actions'



function dropRedcuer(state = [], action) {
  switch (action.type) {
    case CLEAR_GOAl: {
      return action.newState
    }
    case DROP_ITEM:
      // console.log("actions is", action)
      // console.log("state is ", state)
      let newState = state.map((item, i) => {
        // console.log("check goal " + i + " against ", action.target)
        // console.log("action.item is ", action.item)
        //return i
        if (i == action.target) { return action.item }
        else return item
      }
      );

      // console.log("new state = ", newState)
      return newState
    default:
      return state
  }
}

export default dropRedcuer 