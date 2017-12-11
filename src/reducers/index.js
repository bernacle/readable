import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import post from './post'
import comment from './comment'
import filters from './filters'
import list_comments from './list_comments'


const rootReducer = combineReducers({
    categories,
    posts,
    comments,
    post,
    comment,
    filters,
    list_comments
});

export default rootReducer
