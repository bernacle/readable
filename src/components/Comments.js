import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVoteComment, fetchComments, removeComment } from '../actions'

class Comments extends Component {

  vote = (comment, option) => {
    this.props.dispatch(fetchVoteComment(comment.id, option))
  }

  handleEdit = (comment) => {
    this.props.onEditCommentModal(comment)
  }

  remove = (comment) => {
    this.props.dispatch(removeComment(comment, comment.parentId))
  }

    render(){
      const { comments } = this.props

        return(
          <div>
          {comments.map((comment) => (

            <div key={comment.id}>
              {comment.body} <br/>
              <span>by {comment.author} | {comment.voteScore} votes</span>
              <button className="buttonVote" onClick={() => {this.vote(comment, "upVote")}}>Up</button>
              <button className="buttonVote" onClick={() => {this.vote(comment, "downVote")}}>Down</button>
              <button className="buttonEditC" onClick={() => {this.handleEdit(comment)}}>Edit</button>
              <button className="buttonRemoveC"onClick={() => {this.remove(comment)}}>Remove</button><hr/>
            </div>
          ))}
          </div>
        )
    }

}

export default connect()(Comments)
