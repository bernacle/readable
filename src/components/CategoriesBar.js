import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategoryPosts, chooseCategory} from '../actions'

class CategoriesBar extends Component {

handleClick = (event) => {
  if (event.target.value === ""){
    this.props.dispatch(fetchPosts())
    this.props.dispatch(chooseCategory(event.target.value))
    window.history.pushState(null, null, '/')
  } else {
    this.props.dispatch(fetchCategoryPosts(event.target.value))
    this.props.dispatch(chooseCategory(event.target.value))
    window.history.pushState(null, null, event.target.value)
  }

}

    render(){
        const { categories, option, filters } = this.props

        return(
          <nav>
            <ul className='categories'>
               <select value={filters.category} onChange={this.handleClick} className='post-select-small'>
                  <option key="all" value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                  ))}
                </select>
            </ul>
          </nav>
        )
    }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    filters: state.filters
  }
}


export default connect(mapStateToProps)(CategoriesBar)
