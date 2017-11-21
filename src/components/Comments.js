import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'
import { fetchVoteComment, fetchComments } from '../actions'

class Comments extends Component {

  vote = (comment, option) => {
    //console.log(event)
    this.props.dispatch(fetchVoteComment(comment.id, option))
  }

    render(){
      const { comments } = this.props

        return(
          <div>
          {comments.map((comment) => (
            // <Comment
            //   comment={comment}
            //   key={comment.id}
            // />
            <div key={comment.id}>
              {comment.body} <br/>
              <span>by {comment.author} | {comment.voteScore} votes</span>
              <button onClick={() => {this.vote(comment, "upVote")}}>Up</button>
              <button onClick={() => {this.vote(comment, "downVote")}}>Down</button><hr/>
            </div>
          ))}
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(Comments)
