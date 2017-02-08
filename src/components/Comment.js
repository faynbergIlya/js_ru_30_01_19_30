import React, {Component, PropTypes}  from 'react'

function Comment(props) {

    const {text, user} = props.comment

    return (
        <div>
            {text}
            {user && <b> by {user}</b>}
        </div>
    )
}
Comment.propTypes={
    comment: PropTypes.array.isRequired
}

export default Comment