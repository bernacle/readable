import {
    RECEIVE_POSTS,
    ADD_POST
} from '../actions'

const initialState = []

const posts = (state = initialState, action) => {
  const {posts} = action

  switch (action.type) {
      case RECEIVE_POSTS:
          return action.posts

      case ADD_POST:
          return state.concat(action.post)

      default:
          return state
  }
}

export default posts
