import {
    RECEIVE_COMMENT
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

      default:
          return state
  }
}

export default comment
