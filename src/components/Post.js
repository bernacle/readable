import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchPost, fetchComments, fetchVotePost } from '../actions'
import { connect } from 'react-redux'
import Comments from './Comments'
import AddComment from './AddComment'
import EditComment from './EditComment'
import Modal from 'react-modal'
import { insertComment, updateComment } from '../actions'
import uid from 'uid'


class Post extends Component {

  state = {
    commentsModalOpen: false,
    commentsEditModalOpen: false,
    commentToEdit: null
  }

  addComment = (e, body, author) => {
    let comment = {}
    if (body && author){
      e.preventDefault()
      comment.id = uid(10)
      comment.parentId = this.props.match.params.id
      comment.timestamp = Date.now()
      comment.body = body
      comment.author = author
      this.props.dispatch(insertComment(comment))
      this.setState(() => ({commentsModalOpen: false}))
    } else {
      return
    }
}

  editComment = (e, body, id) => {
    let comment = {}
    e.preventDefault
    comment.id = id
    comment.timestamp = Date.now()
    comment.body = body
    this.props.dispatch(updateComment(comment))
    this.setState(() => ({commentsEditModalOpen: false}))
  }

  componentDidMount(){
    this.props.dispatch(fetchPost(this.props.match.params.id))
    this.props.dispatch(fetchComments(this.props.match.params.id))
  }

  vote = (option) => {
    this.props.dispatch(fetchVotePost(this.props.post.id, option))
  }

  openEditCommentModal = (comment) => {
    this.setState({
      commentsEditModalOpen: true,
      commentToEdit: comment
    })
  }
  closeEditCommentModal = () => this.setState(() => ({commentsEditModalOpen: false}))

  openCommentsModal = () => this.setState(() => ({commentsModalOpen: true}))
  closeCommentsModal = () => this.setState(() => ({commentsModalOpen: false}))

    render(){
      const { post, comments } = this.props
      const { commentsModalOpen, commentsEditModalOpen } = this.state

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
                    comments={this.props.comments}
                    onEditCommentModal={this.openEditCommentModal}
            />
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
              <AddComment
                onAddComment={this.addComment}
                onCloseModal={this.closeCommentsModal}
              />
            }
            </Modal>
            <Modal
                    className='modal'
                    overlayClassName='overlay'
                    isOpen={commentsEditModalOpen}
                    onRequestClose={this.closeEditCommentModal}
                    contentLabel='Modal'
            >
            {commentsEditModalOpen &&
              <EditComment
                onEditComment={this.editComment}
                onCloseModal={this.closeEditCommentModal}
                comment={this.state.commentToEdit}
              />
            }
            </Modal>
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
