import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import CategoriesBar from './CategoriesBar'
import Posts from './Posts'
import Post from './Post'
import { fetchCategories, fetchPosts } from '../actions'
import { connect } from 'react-redux'
import { Route, Link, withRouter } from 'react-router-dom'

class App extends Component {

componentDidMount(){
  this.props.dispatch(fetchCategories())
  this.props.dispatch(fetchPosts())
}

// <Route path="/posts/:id" component={Post}/>

  render() {

    const { categories, posts} = this.props

    return (
      <div className="container">
        <Route exact path="/" render={() => (
          <div>
            <CategoriesBar
                categories={categories}
            />
            <Posts
                posts={posts}
            />
          </div>
        )}/>

        <Route path="/posts/:id" component={Post}/>
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


export default withRouter (connect(mapStateToProps)(App));
