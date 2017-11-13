import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import CategoriesBar from './CategoriesBar'
import Posts from './Posts'
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
        <Posts
            posts={posts}
        />
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
