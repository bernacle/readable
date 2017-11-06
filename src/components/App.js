import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI'
import { fetchCategories, fetchPosts } from '../actions'
import { connect } from 'react-redux'
import '../App.css';

class App extends Component {

componentDidMount(){
  this.props.dispatch(fetchPosts())
}

  render() {
    return (
      <div></div>
    )
  }
}

export default connect()(App);
