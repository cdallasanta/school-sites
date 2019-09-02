import React from 'react';
import Blog from '../components/Blog'

class BlogList extends React.Component {
  renderBlogs = () => {
    return this.props.blogs.map(b => {
      return <Blog blog={b} />
    })
  }

  render(){
    return this.renderBlogs()
  }
}

export default BlogList;