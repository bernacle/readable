import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'


const rootReducer = combineReducers({
    categories,
    postsReducer
});

export default rootReducer
