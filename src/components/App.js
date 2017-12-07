import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import CategoriesBar from './CategoriesBar'
import SortByBar from './SortByBar'
import Posts from './Posts'
import Post from './Post'
import CategoryPosts from './CategoryPosts'
import AddPost from './AddPost'
import EditPost from './EditPost'
import RemovePost from './RemovePost'
import { fetchCategories, fetchPosts, fetchAllComments} from '../actions'
import { connect } from 'react-redux'
import { Route, Link, withRouter, Switch } from 'react-router-dom'


class App extends Component {

componentDidMount(){
  this.props.dispatch(fetchCategories())
  this.props.dispatch(fetchPosts())
  this.props.dispatch(fetchAllComments())
}


  render() {

    const { categories, posts, list_comments} = this.props

    return (
      <div className="container">
        <h1>HackerNews</h1>
        <Switch>
          <Route exact path="/" render={() => (
            <div>

              <div className="bars">
                <CategoriesBar
                    categories={categories}
                />

                <SortByBar />
              </div>

              <Posts
                  posts={posts}
                  list_comments={list_comments}
              />
              <Link to="/posts">Add Post</Link>
            </div>
          )}/>

          <Route exact path="/posts/:id" component={Post}/>
          <Route path="/category/:category" component= {CategoryPosts}/>
          <Route exact path="/posts" component={AddPost} />
          <Route path="/posts/:id/edit" component={EditPost}/>
          <Route path="/posts/:id/remove" component={RemovePost}/>
        </Switch>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    list_comments: state.list_comments
  }
}


export default withRouter (connect(mapStateToProps)(App));
