import {
    LIST_COMMENTS,
    ADD_TO_LIST_COMMENTS,
    DELETE_FROM_LIST_COMMENTS
} from '../actions'

const initialState = []

const list_comments = (state = initialState, action) => {

  switch (action.type) {
      case LIST_COMMENTS:
        return state.concat(action.comments)

      case ADD_TO_LIST_COMMENTS:
        return state.concat(action.comment)

      case DELETE_FROM_LIST_COMMENTS:
        return state.filter(comment => comment.id !== action.comment.id)

      default:
          return state
  }
}

export default list_comments
