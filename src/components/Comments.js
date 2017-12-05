import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVoteComment, fetchComments } from '../actions'

class Comments extends Component {

  vote = (comment, option) => {
    this.props.dispatch(fetchVoteComment(comment.id, option))
  }

  handleEdit = (comment) => {
    this.props.onEditCommentModal(comment)
  }

    render(){
      const { comments } = this.props

        return(
          <div>
          {comments.map((comment) => (

            <div key={comment.id}>
              {comment.body} <br/>
              <span>by {comment.author} | {comment.voteScore} votes</span>
              <button onClick={() => {this.vote(comment, "upVote")}}>Up</button>
              <button onClick={() => {this.vote(comment, "downVote")}}>Down</button>
              <button onClick={() => {this.handleEdit(comment)}}>Edit</button><hr/>
            </div>
          ))}
          </div>
        )
    }

}

export default connect()(Comments)
