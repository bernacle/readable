import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
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
        <nav>
        <ul className='categories'>
          {categories.map((category) => (
            <li>
              <a href="/">
                <h2>{category.name}</h2>
              </a>
            </li>
          ))}
        </ul>
        </nav>
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
