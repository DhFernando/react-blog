import React from 'react'
import './Comment.css' 

function Comment() {
    return (
        <div className="root">
            <input className="comment__input"  variant="outlined" placeholder="Comment your Idea ..!"/>
            <button variant="outlined" className="comment__button"> Comment </button> 
        </div>
    )
}

export default Comment
