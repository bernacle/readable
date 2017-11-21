import React, { Component } from 'react'
import Comment from './Comment'
import { connect } from 'react-redux'

class Comments extends Component {

    render(){
      const { comments } = this.props

        return(
          <div>
          {comments.map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
            />
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
