import {
    RECEIVE_POSTS,
    ADD_POST
} from '../actions'

const initialState = []

const posts = (state = initialState, action) => {
  const {posts} = action

  switch (action.type) {
      case RECEIVE_POSTS:
          return [
            action.posts
          ]

      case ADD_POST:
          return {
            ...state,
            posts: state.concat({
              post: action.post,
              // id: action.id,
              // timestamp: action.timestamp,
              // title: action.title,
              // body: action.body,
              // author: action.author,
              // category: action.category,
            })
          }

      default:
          return state
  }
}

export default posts
