import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Posts'
import CategoriesBar from './CategoriesBar'
import SortByBar from './SortByBar'
import { chooseCategory} from '../actions'


class CategoryPosts extends Component {

  componentWillMount(){
    this.props.dispatch(chooseCategory(this.props.match.params.category))
  }

    render(){
        const { posts, list_comments, filters } = this.props

        return(
          <div>
            <div className="bars">
              <CategoriesBar />

              <SortByBar />
            </div>

            <Posts
                posts = {filters.category === 'all'
                        ? posts
                        : posts.filter((post) => (post.category === filters.category))}
                list_comments={list_comments}
            />
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    list_comments: state.list_comments,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(CategoryPosts)
