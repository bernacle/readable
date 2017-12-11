import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVotePost } from '../actions'

class Posts extends Component {

  vote = (post, option) => {
    this.props.dispatch(fetchVotePost(post.id, option, this.props.filters.voteScore))
  }

    render(){
        const { posts, list_comments } = this.props

        return(
          <div>
            <ul className='posts'>
              {posts.map((post) => (
                <li key={post.id} className="post">
                  <hr/>
                  <Link className="postLink" to={`/${post.category}/${post.id}`}>{post.title}</Link> <br/>
                  <span>by {post.author} | {post.voteScore} votes </span>
                  <span>| {list_comments.filter(comment => comment.parentId === post.id).length} comments</span> <br/>
                    <a href='#' className="likeabutton voteLink" onClick={() => {this.vote(post, "upVote")}}>Up</a>
                    <a href='#' className="likeabutton voteLink" onClick={() => {this.vote(post, "downVote")}}>Down</a>
                    <Link className='likeabutton editLink' to={`/posts/${post.id}/edit`}>Edit</Link>
                    <Link className='likeabutton removeLink' to={`/posts/${post.id}/remove`}>Remove</Link>
                </li>
              ))}
            </ul>
          </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(Posts)
