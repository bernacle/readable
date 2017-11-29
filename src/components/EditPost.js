import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uid from 'uid'
import Posts from './Posts'
import { insertPost } from '../actions'
import { push } from 'react-router-redux'
import { fetchPost } from '../actions'


class EditPost extends Component {

  update = (e) => {

  }

  componentDidMount(){
    this.props.dispatch(fetchPost(this.props.match.params.id))
  }

    render(){
        return(
          <div className="add">
            <input
                    className='post-input'
                    required
                    type='text'
                    value={this.props.post.title}
                    onChange={this.update}
                    ref={(input) => this.title = input}
            />
            <input
                    className='post-input'
                    required
                    type='text'
                    value={this.props.post.body}
                    ref={(input) => this.body = input}
            />
            <input
                    className='post-input'
                    required
                    type='text'
                    value={this.props.post.author}
                    ref={(input) => this.author = input}
            />
            <select ref={(input) => this.category = input} defaultValue={this.props.post.category} className='post-select' required>
                <option disabled selected value="">Choose a category</option>
                <option value="react">React</option>
                <option value="redux">Redux</option>
                <option value="udacity">Udacity</option>
            </select>
            <button className="buttonSubmit" onClick={this.addPost}>Update</button>
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
