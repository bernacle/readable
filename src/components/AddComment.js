import React, { Component } from 'react'

class AddComment extends Component {

    state = {
      author: '',
      body: ''
    }

    handleAdd = (event) => {
        this.props.onAddComment(event, this.state.body, this.state.author)
    }

    handleModalClose = () =>{
      this.props.onCloseModal()
    }

    handleChange = (e) => {
      if (e.target.name === 'body'){
        this.setState({
          body: e.target.value
        })
      } else {
        this.setState({
          author: e.target.value
        })
      }
    }

    render(){
        return(
          <form>
            <input
                    name='body'
                    className='post-input'
                    required
                    type='text'
                    placeholder='Body'
                    value={this.state.body}
                    onChange={this.handleChange}
            />
            <input
                    name='author'
                    className='post-input'
                    required
                    type='text'
                    placeholder='Author'
                    value={this.state.author}
                    onChange={this.handleChange}
            />
            <button className="buttonSubmit" onClick={this.handleAdd}>Submit</button>
            <button className="buttonClose" onClick={this.handleModalClose}>Close</button>
          </form>
        )
    }

}

export default AddComment
