import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Posts from './Posts'
import { fetchPosts, fetchCategoryPosts } from '../actions'

class CategoryPosts extends Component {

    render(){
        const { posts, list_comments } = this.props

        return(
          <div>
            <Posts
                posts={posts.filter((post) => (post.category === this.props.match.params.category))}
                list_comments={list_comments}
            />
            <Link className="likeabutton defaultLink" to="/">All Posts</Link>
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    list_comments: state.list_comments
  }
}

export default connect(mapStateToProps)(CategoryPosts)
