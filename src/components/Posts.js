import React, { Component } from 'react'

class Posts extends Component {

    render(){
        const { posts } = this.props

        return(
          <div>
            <h1>HackerNews</h1>
            <ul className='posts'>
              {posts.map((post) => (
                <li key={post.id}>
                  <a href="">{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )
    }

}

export default Posts
