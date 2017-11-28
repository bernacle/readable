import {
    RECEIVE_COMMENTS,
    ADD_COMMENT,
    VOTE_COMMENT
} from '../actions'

const initialState = []

const comments = (state = initialState, action) => {
  const {comments} = action

  switch (action.type) {
      case RECEIVE_COMMENTS:
          return action.comments

      case ADD_COMMENT:
          return {
            ...state,
            comments: state.concat({
              comment: action.comment
              // id: action.id,
              // timestamp: action.timestamp,
              // body: action.body,
              // author: action.author,
              // parentId: action.parentId,
            })
          }

      case VOTE_COMMENT:
          return state.map(comment => {
            if(comment.id === action.comment.id){
              return {...comment, ...action.comment}
            }
            return comment
          })

      default:
          return state
  }
}

export default comments
