import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar'
import SortByBar from './SortByBar'
import Posts from './Posts'
import Post from './Post'
import CategoryPosts from './CategoryPosts'
import AddPost from './AddPost'
import EditPost from './EditPost'
import RemovePost from './RemovePost'
import { fetchCategories, fetchPosts, fetchAllComments, chooseCategory} from '../actions'
import { connect } from 'react-redux'
import { Route, Link, withRouter, Switch } from 'react-router-dom'


class App extends Component {

componentDidMount(){
  this.props.dispatch(fetchCategories())
  this.props.dispatch(fetchPosts())
  this.props.dispatch(fetchAllComments())
}


  render() {

    const { categories, posts, list_comments, filters} = this.props

    return (
      <div className="container center">
        <div className="center-things">
          <h1><span>HackerNews</span></h1>
          <Switch>
            <Route exact path="/" render={() => (
              <div>

                <div className="bars">
                  <CategoriesBar />

                  <SortByBar />
                </div>

                <Posts
                    posts={posts}
                    list_comments={list_comments}
                />
                {filters.category === "" &&
                    <Link className="likeabutton addLink" to="/posts">Add Post</Link>
                }
              </div>
            )}/>

            <Route exact path="/posts" component={AddPost} />
            <Route exact path="/:category/:id" component={Post}/>
            <Route exact path="/:category" component= {CategoryPosts}/>
            <Route path="/posts/:id/edit" component={EditPost}/>
            <Route path="/posts/:id/remove" component={RemovePost}/>
          </Switch>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    list_comments: state.list_comments,
    filters: state.filters
  }
}


export default withRouter (connect(mapStateToProps)(App));
