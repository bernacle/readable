import {
    RECEIVE_POSTS,
    ADD_POST,
    EDIT_POST,
    VOTE_POSTS,
    SORT_POSTS
} from '../actions'

import sortBy from 'sort-by'

const initialState = []

const posts = (state = initialState, action) => {
  const {posts} = action

  switch (action.type) {
      case RECEIVE_POSTS:
          return action.posts

      case ADD_POST:
          return state.concat(action.post)

      case EDIT_POST:
          return state.map(post => {
            if(post.id === action.post.id){
              return {...post, ...action.post}
            }
            return post
          })

        case VOTE_POSTS:
            return state.map(post => {
              if(post.id === action.post.id){
                return {...post, ...action.post}
              }
              return post
            })

        case SORT_POSTS:
              return state.slice().sort(sortBy(action.option))

      default:
          return state
  }
}

export default posts
