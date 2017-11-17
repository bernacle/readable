import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions'
import { connect } from 'react-redux'


class Post extends Component {


  componentDidMount(){
    console.log(this.props.match)
    this.props.dispatch(fetchPost(this.props.match.params.id))
  }

    render(){
      const { post } = this.props

        return(
          <div>
            <p>{post.category}</p>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h3>{post.author} | {post.voteScore} votes</h3>
            <Link to="/">Back</Link>
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

export default connect(mapStateToProps)(Post)
