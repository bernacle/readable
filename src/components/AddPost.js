import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uid from 'uid'
import Posts from './Posts'
import { insertPost } from '../actions'
import { push } from 'react-router-redux'


class AddPost extends Component {

  addPost = (e) => {
    let post = {}
    if (this.title.value && this.body.value && this.author.value && this.category.value){
      e.preventDefault()
      post.id = uid(10)
      post.timestamp = Date.now()
      post.title = this.title.value
      post.body = this.body.value
      post.author = this.author.value
      post.category = this.category.value
      this.props.dispatch(insertPost(post))
      this.props.history.push('/')

    } else {
      return
    }
}

    render(){
        return(
          <div className="add">
            <input
                    className='post-input'
                    required
                    type='text'
                    placeholder='Post Title'
                    ref={(input) => this.title = input}
            />
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
            <select ref={(input) => this.category = input} className='post-select' required>
                <option disabled value="">Choose a category</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
            </select>
            <button className="buttonSubmit" onClick={this.addPost}>Add Post</button>
            <br/>
            <Link to="/">Back</Link>
          </div>
        )
    }

}

export default withRouter(connect()(AddPost))
