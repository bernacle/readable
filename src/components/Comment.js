import React, { Component } from 'react'
import { fetchComment, fetchVoteComment } from '../actions'
import { connect } from 'react-redux'

class Comment extends Component {

    vote = (option) => {
      this.props.dispatch(fetchComment(this.props.comment.id))
      this.props.dispatch(fetchVoteComment(this.props.comment.id, option))
    }

    render(){
      const { comment } = this.props

        return(
          <div>
            {comment.body} <br/>
            <span>by {comment.author} | {comment.voteScore} votes</span>
            <button onClick={() => {this.vote("upVote")}}>Up</button>
            <button onClick={() => {this.vote("downVote")}}>Down</button><hr/>
          </div>
        )
    }

}

export default connect()(Comment)
