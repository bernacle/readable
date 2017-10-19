import {
    RECEIVE_POST
} from '../actions'

// const initialState = {
//   posts: {
//     id: null,
//     timestamp: null,
//     title: null,
//     body: null,
//     author: null,
//     category: null,
//   },
// }

const post = (state = {}, action) => {

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
