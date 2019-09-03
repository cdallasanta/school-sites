import React from 'react';
import Blog from '../components/Blog'

class BlogList extends React.Component {
  renderBlogs = () => {
    return this.props.blogs.map(b => {
      return <Blog blog={b} />
    })
  }

  render(){
    return (
      <div>
        <h3>Blogs</h3>
        {this.renderBlogs()}
      </div>
    )
  }
}

export default BlogList;