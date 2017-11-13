import React, { Component } from 'react'

class CategoriesBar extends Component {

    render(){
        const { categories } = this.props

        return(
          <nav>
            <ul className='categories'>
              {categories.map((category) => (
                <li>
                  <a href="/">
                    <h2>{category.name}</h2>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )
    }

}

export default CategoriesBar
