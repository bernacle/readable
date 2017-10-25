import {
    RECEIVE_COMMENTS
} from '../actions'

const initialState = []

const comments = (state = initialState, action) => {
  const {comments} = action

  switch (action.type) {
      case RECEIVE_comments:
          return {
            ...state,
            comments: action.comments
          }

      default:
          return state
  }
}

export default comments
