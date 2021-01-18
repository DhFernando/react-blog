import React , { useEffect, useState } from 'react'
import "./Post.css"
import Comment from '../Comment/Comment'

import { Avatar, Paper } from "@material-ui/core"

function Post(props) {
    const [postDeatails , setPostDeatails] = useState(null)
    
    useEffect(()=>{
        setPostDeatails(props.postDeatails)
    },[props.postDeatails])

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                <h3 className="post__header__username">{ postDeatails != null && postDeatails.username }</h3>
            </div>
            <h4 className="post__text"> <strong>{ postDeatails != null && postDeatails.topic }</strong> somwthing </h4>
            <img className="post__image" alt="default_image"  src= { postDeatails != null ? 
            (postDeatails.imageUrl == null || postDeatails.imageUrl.length === 0 ? "https://blog.cloudhq.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" : postDeatails.imageUrl ) 
                : "https://blog.cloudhq.net/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png" } />   
            
            <p>{ postDeatails != null && postDeatails.content }</p> 
            <Paper>
              <Comment />   
            </Paper>
            
        </div>
    )
}

export default Post
