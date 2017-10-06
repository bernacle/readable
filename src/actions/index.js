import ReadableAPI from '../utils/ReadableAPI'

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
   //async call to api, and if ok dispatch receive action
   ReadableAPI
      .getAllCategories()
      .then(categories => dispatch(receiveCategories(categories)))
)

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
   //async call to api, and if ok dispatch receive action
   ReadableAPI
      .getAllPosts()
      .then(posts => dispatch(receivePosts(posts)))
)

// export const fetchPosts = () => dispatch => (
//   //async call to api, and if ok dispatch receive action
// )

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const fetchPost = (post) => dispatch => (
   //async call to api, and if ok dispatch receive action
   ReadableAPI
      .getPost(post.id)
      .then(post => dispatch(receivePost(post)))
)

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const fetchComments = (post) => dispatch => (
  ReadableAPI
      .getAllComments(post.id)
      .then(comments => dispatch(receiveComments(comments)))
)
