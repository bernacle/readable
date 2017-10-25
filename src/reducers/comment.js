import {
    RECEIVE_COMMENT
} from '../actions'

const initialState = {}

const comment = (state = initialState, action) => {

  switch (action.type) {
      case RECEIVE_COMMENT:
          return {
            ...state,
            comment: action.comment
          }


      default:
          return state
  }
}

export default comment
