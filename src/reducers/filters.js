import {
    CHOOSE_CATEGORY,
    CHOOSE_SORT
} from '../actions'

const initialState = {
  category: '',
  voteScore: ''
}

const filters = (state = initialState, action) => {

  switch (action.type) {
      case CHOOSE_CATEGORY:
        return {
          ...state,
          category: action.category
        }

      case CHOOSE_SORT:
        return {
          ...state,
          voteScore: action.voteScore
        }

      default:
          return state
  }
}

export default filters
