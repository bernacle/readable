import {
    RECEIVE_COMMENTS
} from '../actions'

const initialState = []

const comments = (state = initialState, action) => {
  const {comments} = action

  switch (action.type) {
      case RECEIVE_COMMENTS:
          return [
            action.comments
          ]

      case ADD_COMMENTS:
          return {
            ...state,
            comments: state.concat({
              comment: action.comment
              // id: action.id,
              // timestamp: action.timestamp,
              // body: action.body,
              // author: action.author,
              // parentId: action.parentId,
            })
          }
      default:
          return state
  }
}

export default comments
