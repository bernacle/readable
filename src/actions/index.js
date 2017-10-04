
import ReadableAPI from '../utils/ReadableAPI'

export const LIST_CATEGORIES = 'LIST_CATEGORIES'
export const LIST_POSTS = 'LIST_POSTS'
export const ADD_POST = 'ADD_POST'

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
   //async call to api, and if ok dispatch receive action
   
   ReadableAPI.getAllCategories()

)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

// export const fetchPosts = () => dispatch => (
//   //async call to api, and if ok dispatch receive action
// )

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

// export const fetchPost = () => dispatch => (
//   //async call to api, and if ok dispatch receive action
// )
