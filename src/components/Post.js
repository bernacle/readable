import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPost, fetchComments, fetchVotePost } from '../actions'
import { connect } from 'react-redux'
import Comments from './Comments'


class Post extends Component {


  componentDidMount(){
    this.props.dispatch(fetchPost(this.props.match.params.id))
    this.props.dispatch(fetchComments(this.props.match.params.id))
  }

  vote = (option) => {
    this.props.dispatch(fetchVotePost(this.props.post.id, option))
  }

    render(){
      const { post, comments } = this.props

        return(
          <div>
            <p>{post.category}</p>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h3>{post.author} | {post.voteScore} votes</h3>
            <button onClick={() => {this.vote("upVote")}}>Up</button>
            <button onClick={() => {this.vote("downVote")}}>Down</button>
            <h1>Comments</h1>
            <Comments
              comments={comments}
            />
            <Link to="/">Back</Link>
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    post: state.post,
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Post)
