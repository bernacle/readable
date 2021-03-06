import * as ReadableAPI from '../utils/ReadableAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'
export const ADD_POST ='ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const VOTE_POSTS = 'VOTE_POSTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_TO_LIST_COMMENTS = 'ADD_TO_LIST_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_FROM_LIST_COMMENTS = 'DELETE_FROM_LIST_COMMENTS'
export const LIST_COMMENTS = 'LIST_COMMENTS'
export const SORT_POSTS = 'SORT_POSTS'
export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY'
export const CHOOSE_SORT = 'CHOOSE_SORT'

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
   ReadableAPI
      .getAllPosts()
      .then(posts => dispatch(receivePosts(posts)))
)


export const fetchCategoryPosts = (category) => dispatch => (
    ReadableAPI
      .getAllCategoryPosts(category)
      .then(posts => dispatch(receivePosts(posts)))
)

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const fetchPost = (id) => dispatch => (
   //async call to api, and if ok dispatch receive action
   ReadableAPI
      .getPost(id)
      .then(post => dispatch(receivePost(post)))
)

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const insertPost = (post) => dispatch => (
  ReadableAPI
      .addPost(post)
      .then(post => dispatch(addPost(post)))
)

export const editPost = post => ({
  type: EDIT_POST,
  post
})

export const updatePost = (post) => dispatch => (
  ReadableAPI
      .updatePost(post.id, post.title, post.body)
      .then(post => dispatch(editPost(post)))
)

export const deletePost = post => ({
  type: DELETE_POST,
  post
})

export const removePost = (post) => dispatch => (
  ReadableAPI
      .removePost(post.id)
      .then(post => dispatch(deletePost(post)))
)

export const votePost = post => ({
  type: VOTE_POST,
  post
})


export const votePosts = post => ({
  type: VOTE_POSTS,
  post
})

export const fetchVotePost = (id, option, sortBy) => dispatch => (
  ReadableAPI
      .votePost(id, option)
      .then((post) => {
        dispatch(votePost(post))
        dispatch(votePosts(post))
        if(sortBy === '-voteScore'){
          dispatch(sortPosts(sortBy))
        }
      })
)

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const fetchComments = (id) => dispatch => (
  ReadableAPI
      .getAllComments(id)
      .then(comments => dispatch(receiveComments(comments)))
)

export const addListComments = (post) => dispatch => (
  ReadableAPI
      .getAllComments(post.id)
      .then(comments => dispatch(listComments(comments, post)))
)

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

export const addToListComments = comment => ({
  type: ADD_TO_LIST_COMMENTS,
  comment
})

export const insertComment = (comment) => dispatch => (
  ReadableAPI
      .addComment(comment)
      .then((comment) => {
        dispatch(addComment(comment))
        dispatch(addToListComments(comment))
      })
)

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const fetchComment = (comment) => dispatch => (
   //async call to api, and if ok dispatch receive action
   ReadableAPI
      .getComment(comment.id)
      .then(comment => dispatch(receiveComment(comment)))
)

export const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment
})

export const fetchVoteComment = (id, option) => dispatch => (
  ReadableAPI
      .voteComment(id, option)
      .then(comment => dispatch(voteComment(comment)))
)

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment
})

export const listComments = (comments, post) => ({
  type: LIST_COMMENTS,
  comments,
  post
})

export const fetchAllComments = () => dispatch => (
  ReadableAPI
      .getAllPosts()
      .then(posts => dispatch(fetchListComments(posts)))
)

export const fetchListComments = (posts) => dispatch => (
  posts.map((post) => {
    ReadableAPI
        .getAllComments(post.id)
        .then(comment => dispatch(addListComments(post)))
  })
)

export const updateComment = (comment) => dispatch => (
  ReadableAPI
      .updateComment(comment.id, comment.timestamp, comment.body)
      .then(comment => dispatch(editComment(comment)))
)

export const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  comment
})

export const deleteFromListComments = (comment) => ({
  type: DELETE_FROM_LIST_COMMENTS,
  comment
})

export const removeComment = (comment) => dispatch => (
  ReadableAPI
      .removeComment(comment.id)
      .then((comment) => {
        dispatch(deleteComment(comment))
        dispatch(deleteFromListComments(comment))
      })
)

export const sortPosts = (option) => ({
  type: SORT_POSTS,
  option
})

export const chooseCategory = (category) => ({
  type: CHOOSE_CATEGORY,
  category
})

export const chooseSort = (voteScore) => ({
  type: CHOOSE_SORT,
  voteScore
})
