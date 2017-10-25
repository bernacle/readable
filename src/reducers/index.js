import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import post from './post'
import comment from './comment'


const rootReducer = combineReducers({
    categories,
    posts,
    comments,
    post,
    comment
});

export default rootReducer
