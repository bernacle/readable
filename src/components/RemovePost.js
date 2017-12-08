import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removePost } from '../actions'
import { fetchPost, fetchPosts } from '../actions'
import { push } from 'react-router-redux'


class EditPost extends Component {

  remove = (e) => {
    e.preventDefault()
    this.props.dispatch(removePost(this.props.post))
    this.props.dispatch(fetchPosts())
    this.props.history.push('/')
  }

  componentWillMount(){
    this.props.dispatch(fetchPost(this.props.match.params.id))
  }

    render(){
        return(
          <div className="add">
            <h1 class="removePostTitle"><span>{this.props.post.title}</span></h1>
            <label>If you hit the button, you will delete the post and all the comments in it. Ready?</label>
            <button className="buttonRemove" onClick={this.remove}>Remove Post</button>
            <br/>
            <Link className='likeabutton defaultLink' to="/">Quit</Link>
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

export default withRouter(connect(mapStateToProps)(EditPost))
