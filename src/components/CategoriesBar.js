import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoriesBar extends Component {

handleClick = (event) => {
  if (event.target.value === "all"){
    window.location = '/'
  } else {
    window.location = event.target.value
  }

}

    render(){
        const { categories, option } = this.props

        return(
          <nav>
            <ul className='categories'>
               <select value={option} onChange={this.handleClick} className='post-select-small'>
                  <option key="all" value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                  ))}
                </select>
            </ul>
          </nav>
        )
    }

}


export default connect()(CategoriesBar)
