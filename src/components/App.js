import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import CategoriesBar from './CategoriesBar'
import Posts from './Posts'
import Post from './Post'
import CategoryPosts from './CategoryPosts'
import AddPost from './AddPost'
import EditPost from './EditPost'
import { fetchCategories, fetchPosts } from '../actions'
import { connect } from 'react-redux'
import { Route, Link, withRouter, Switch } from 'react-router-dom'


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
        <h1>HackerNews</h1>
        <Switch>
          <Route exact path="/" render={() => (
            <div>
              <CategoriesBar
                  categories={categories}
              />
              <Posts
                  posts={posts}
              />
              <Link to="/posts">Add Post</Link>
            </div>
          )}/>

          <Route exact path="/posts/:id" component={Post}/>
          <Route path="/category/:category" component= {CategoryPosts}/>
          <Route exact path="/posts" component={AddPost} />
          <Route path="/posts/:id/edit" component={EditPost}/>
        </Switch>
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
