import React, { Component, PropTypes } from 'react'

export default class Comments extends Component {
	render() {
    const { children } = this.props
		console.log(children);
    return (
      <div className="comments">
        {children.map(comment =>
          <div key={comment.id} className="comment">
            <span>{comment.id}</span>
						<span>{comment.content}</span>
            {comment.children && <Comments children={comment.children}/>}
          </div>
        )}
      </div>
    )
  }
}

// Comments.propTypes = {
//   children: PropTypes.array.isRequired
// }
