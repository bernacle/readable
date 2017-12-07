import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVotePost } from '../actions'

class Posts extends Component {

  vote = (post, option) => {
    this.props.dispatch(fetchVotePost(post.id, option))
  }

    render(){
        const { posts, list_comments } = this.props

        return(
          <div>
            <ul className='posts'>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  <Link className='edit' to={`/posts/${post.id}/edit`}>Edit</Link>
                  <Link className='edit' to={`/posts/${post.id}/remove`}>Remove</Link> <br/>
                  <span>by {post.author} | {post.voteScore} votes </span>
                  <span>| {list_comments.filter(comment => comment.parentId === post.id).length} comments</span>
                  <button className="buttonVote" onClick={() => {this.vote(post, "upVote")}}>Up</button>
                  <button className="buttonVote" onClick={() => {this.vote(post, "downVote")}}>Down</button>
                </li>
              ))}
            </ul>
          </div>
        )
    }

}

export default connect()(Posts)
