import { combineReducers } from 'redux'
import post from './post'

import {
    RECEIVE_POSTS,
    ADD_POST
} from '../actions'

const initialState = {
  posts: [],
}

const posts = (state = initialState, action) => {
  const {posts} = action

  switch (action.type) {
      case RECEIVE_POSTS:
          return {
            ...state,
            posts: action.posts
          }

      case ADD_POST:
          return {
            ...state,
            posts: state.posts.concat({
              id: action.id,
              timestamp: action.timestamp,
              title: action.title,
              body: action.body,
              author: action.author,
              category: action.category,
            })
          }

      default:
          return state
  }
}

const postsReducer = combineReducers({
    post,
    posts
});

export default postsReducer
