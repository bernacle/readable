import {
    RECEIVE_POST
} from '../actions'

const initialState = {}

const post = (state = initialState, action) => {

  switch (action.type) {
      case RECEIVE_POST:
          return {
            ...state,
            post: action.post
          }


      default:
          return state
  }
}

export default post