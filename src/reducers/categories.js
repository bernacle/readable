import {
    fetchCategories
} from '../actions'

const initialState = {
  categories: [],
}

const categories = (state = initialState, action) => {
  const {categories} = action

  switch (action.type) {
      case RECEIVE_CATEGORIES:
          return {
            ...state,
            categories: action.categories
          }

      default:
          return state
  }
}

export default categories
