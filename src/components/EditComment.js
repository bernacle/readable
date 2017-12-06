import React, { Component } from 'react'

class EditComment extends Component {

    state = {
      body: ''
    }

    handleEdit = (event) => {
        this.props.onEditComment(event, this.state.body, this.props.comment.id)
    }

    handleModalClose = () =>{
      this.props.onCloseModal()
    }

    handleChange = (e) => {
      this.setState({
        body: e.target.value
      })
    }

    componentDidMount() {
      this.setState({
        body: this.props.comment.body,
      })
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
            <button className="buttonSubmit" onClick={this.handleEdit}>Update</button>
            <button className="buttonSubmit" onClick={this.handleModalClose}>Close</button>
          </form>
        )
    }

}

export default EditComment
