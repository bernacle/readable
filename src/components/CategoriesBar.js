import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategoryPosts, fetchPosts } from '../actions'

class CategoriesBar extends Component {

handleClick = (event) => {
  if (event.target.value === "all"){
    this.props.dispatch(fetchPosts(event.target.value))
  } else {
    this.props.dispatch(fetchCategoryPosts(event.target.value))
  }

}

    render(){
        const { categories, posts, option } = this.props

        return(
          <nav>
            <ul className='categories'>
               <select value={option} onChange={this.handleClick} className='post-select-small'>
                  <option key="all" value="all">Categories</option>
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
    posts: state.posts
  }
}

export default connect(mapStateToProps)(CategoriesBar)
