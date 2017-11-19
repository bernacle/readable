import React, { Component } from 'react'

class Comments extends Component {

    render(){
      const { comments } = this.props

        return(
          <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              {comment.body} <br/>
              <span>by {comment.author} | {comment.voteScore} votes <hr/></span>
            </div>
          ))}
          </div>
        )
    }

}

export default Comments
