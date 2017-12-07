import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortPosts } from '../actions'

class SortByBar extends Component {

handleClick = (event) => {
    this.props.dispatch(sortPosts(event.target.value))
}

    render(){
        const { posts } = this.props

        return(
          <nav>
            <ul className='categories'>
               <select onChange={this.handleClick} className='post-select-small'>
                  <option disabled key="all" value="all">Sort By</option>
                  <option key="voteScore" value="-voteScore">Vote Score</option>
                  <option key="timestamp" value="-timestamp">Date</option>
                </select>
            </ul>
          </nav>
        )
    }

}



export default connect()(SortByBar)
