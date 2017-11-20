import {
    RECEIVE_POST,
    VOTE_POST,
    EDIT_POST,
    DELETE_POST
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

const post = (state = {initialState}, action) => {

  switch (action.type) {
      case RECEIVE_POST:
          return action.post
          // {
          //   id: action.post.id,
          //   timestamp: action.post.timestamp,
          //   title: action.post.title,
          //   body: action.post.body,
          //   author: action.post.author,
          //   category: action.post.category,
          //   voteScore:action.post.voteScore,
          //   deleted: action.post.deleted
          // }

      case VOTE_POST:
          return {
            ...state,
            voteScore: action.post.voteScore
          }

      case EDIT_POST:
          return {
            ...state,
            title: action.post.title,
            body: action.post.body
          }

      case DELETE_POST:
          return {
            ...state,
            deleted: action.post.deleted
          }

      default:
          return state
  }
}

export default post
