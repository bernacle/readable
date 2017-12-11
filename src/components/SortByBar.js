import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortPosts, chooseSort } from '../actions'

class SortByBar extends Component {

handleClick = (event) => {
    this.props.dispatch(sortPosts(event.target.value))
    this.props.dispatch(chooseSort(event.target.value))
}

    render(){
        const { filters } = this.props
        return(
          <nav>
            <ul className='categories'>
               <select onChange={this.handleClick} className='post-select-small'>
                  <option key="all" value="all">Sort By</option>
                  <option key="voteScore" value="-voteScore">Vote Score</option>
                  <option key="timestamp" value="-timestamp">Date</option>
                </select>
            </ul>
          </nav>
        )
    }
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(SortByBar)
