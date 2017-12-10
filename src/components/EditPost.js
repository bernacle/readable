import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uid from 'uid'
import Posts from './Posts'
import { updatePost } from '../actions'
import { fetchPost } from '../actions'
import { push } from 'react-router-redux'


class EditPost extends Component {

  state = {
    title: '',
    body: ''
  }

  handleChange = (e) => {
    if (e.target.name === 'title'){
      this.setState({
        title: e.target.value
      })
    } else {
      this.setState({
        body: e.target.value
      })
    }
  }

  update = (e) => {
    if ((this.state.title === this.props.post.title) && (this.state.body === this.props.post.body)){
      alert('Fix This! TODO')
    } else {
      let post = {}
      e.preventDefault()
      post.id = this.props.match.params.id
      post.title = this.state.title
      post.body = this.state.body
      this.props.dispatch(updatePost(post))
      this.props.history.push('/')
    }
  }

  componentWillMount(){
    this.props.dispatch(fetchPost(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.post.title,
      body: nextProps.post.body
    })
  }


    render(){
        return(
          <div className="add">
            <h2 className="editLink">Edit Post</h2>
            <form>
              <input
                      name='title'
                      className='post-input'
                      required
                      type='text'
                      value={this.state.title}
                      onChange={this.handleChange}
              />
              <input
                      name= 'body'
                      className='post-input'
                      required
                      type='text'
                      value={this.state.body}
                      onChange={this.handleChange}
              />
              <button className="buttonEdit" onClick={this.update}>Update</button>
            </form>
            <br/>
            <Link to="/">Back</Link>
          </div>
        )
    }

}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

export default withRouter(connect(mapStateToProps)(EditPost))
