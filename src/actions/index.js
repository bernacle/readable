import ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

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


export const fetchCategoryPosts = (category) => dispatch => (
    ReadableAPI
      .getAllCategoryPosts()
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

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const insertPost = (post) => dispatch => (
  ReadableAPI
      .addPost(post)
      .then(post => dispatch)
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
