import {
    RECEIVE_POST
} from '../actions'

const initialState = {
  id: '',
  timestamp: null,
  title: '',
  body: '',
  author: '',
  category: '',
  voteScore: 0,
  deleted: false
}

const post = (state = initialState, action) => {

  switch (action.type) {
      case RECEIVE_POST:
          return state

      case VOTE_POST
          return {
            ...state,
            voteScore: action.post.voteScore
          }

      default:
          return state
  }
}

export default post
