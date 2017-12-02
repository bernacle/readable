import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPost, fetchComments, fetchVotePost } from '../actions'
import { connect } from 'react-redux'
import Comments from './Comments'
import Modal from 'react-modal'
import { insertComment } from '../actions'
import uid from 'uid'


class Post extends Component {

  state = {
    commentsModalOpen: false
  }

  addComment = (e) => {
    let comment = {}
    if (this.body.value && this.author.value){
      e.preventDefault()
      comment.id = uid(10)
      comment.parentId = this.props.match.params.id
      comment.timestamp = Date.now()
      comment.body = this.body.value
      comment.author = this.author.value
      this.props.dispatch(insertComment(comment))
      this.setState(() => ({commentsModalOpen: false}))
    } else {
      return
    }
}

  componentDidMount(){
    this.props.dispatch(fetchPost(this.props.match.params.id))
    this.props.dispatch(fetchComments(this.props.match.params.id))
  }

  vote = (option) => {
    this.props.dispatch(fetchVotePost(this.props.post.id, option))
  }

  openCommentsModal = () => this.setState(() => ({commentsModalOpen: true}))
  closeCommentsModal = () => this.setState(() => ({commentsModalOpen: false}))

    render(){
      const { post, comments } = this.props
      const { commentsModalOpen } = this.state

        return(
          <div>
            <p>{post.category}</p>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h3>{post.author} | {post.voteScore} votes</h3>
            <button onClick={() => {this.vote("upVote")}}>Up</button>
            <button onClick={() => {this.vote("downVote")}}>Down</button>
            <h1>Comments</h1>
            <Comments />
            <button onClick={this.openCommentsModal}>Add Comment</button><br/>
            <Link to="/">Back</Link>
            <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={commentsModalOpen}
                    onRequestClose={this.closeCommentsModal}
                    contentLabel='Modal'
            >
            {commentsModalOpen &&
              <form>
                <input
                        className='post-input'
                        required
                        type='text'
                        placeholder='Body'
                        ref={(input) => this.body = input}
                />
                <input
                        className='post-input'
                        required
                        type='text'
                        placeholder='Author'
                        ref={(input) => this.author = input}
                />
                <button className="buttonSubmit" onClick={this.addComment}>Submit</button>
                <button className="buttonSubmit" onClick={this.closeCommentsModal}>Close</button>
              </form>
            }
            </Modal>
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
