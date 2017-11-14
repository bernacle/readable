import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategoryPosts } from '../actions'

class CategoriesBar extends Component {

handleClick = (event) => {
  this.props.dispatch(fetchCategoryPosts(event.target.value))
}

    render(){
        const { categories, posts, option } = this.props

        return(
          <nav>
            <ul className='categories'>
               <select value={option} onChange={this.handleClick}>
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
