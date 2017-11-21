import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {

    render(){
        const { posts } = this.props

        return(
          <div>
            <ul className='posts'>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )
    }

}

export default Posts
