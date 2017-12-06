import {
    RECEIVE_COMMENT,
    DELETE_COMMENT
} from '../actions'

const initialState = {
  id: '',
  timestamp: null,
  title: '',
  body: '',
  author: '',
  parentId: '',
  voteScore: 0,
  deleted: false,
  parentDeleted: false
}

const comment = (state = initialState, action) => {

  switch (action.type) {
      case RECEIVE_COMMENT:
        return action.comment

      // case VOTE_COMMENT:
      //   return {
      //     ...state,
      //     voteScore: action.comment.voteScore
      //   }

      // case EDIT_COMMENT:
      //   return {
      //     ...state,
      //     timestamp: action.comment.timestamp,
      //     body: action.comment.body
      //   }

      case DELETE_COMMENT:
        return {
          ...state,
          deleted: action.comment.deleted
        }

      default:
          return state
  }
}

export default comment
