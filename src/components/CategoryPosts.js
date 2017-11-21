import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Posts'
import { fetchPosts, fetchCategoryPosts } from '../actions'

class CategoryPosts extends Component {

    render(){
        const { posts } = this.props

        return(
          <div className="container">
            <Posts
                posts={posts.filter((post) => (post.category === this.props.match.params.category))}
            />
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(CategoryPosts)
