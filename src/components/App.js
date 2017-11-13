import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import CategoriesBar from './CategoriesBar'
import { fetchCategories, fetchPosts } from '../actions'
import { connect } from 'react-redux'

class App extends Component {

componentDidMount(){
  this.props.dispatch(fetchCategories())
  this.props.dispatch(fetchPosts())
}

  render() {

    const { categories, posts} = this.props

    return (
      <div className='container'>
        <CategoriesBar
            categories={categories}
        />
        <div>
          <h1>HackerNews</h1>
          <ul className='posts'>
          {posts.map((post) => (
            <li key={post.id}>
              <a href="">{post.title}</a>
            </li>
          ))}
          </ul>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts
  }
}


export default connect(mapStateToProps)(App);
