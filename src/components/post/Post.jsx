import React , { useEffect, useState } from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
function Post(props) {
    const [postDeatails , setPostDeatails] = useState(null)
    
    useEffect(()=>{
        setPostDeatails(props.postDeatails)
    },[])

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                <h3 className="post__header__username">{ postDeatails != null && postDeatails.username }</h3>
            </div>
            <img className="post__image"  src= { postDeatails != null && postDeatails.imageUrl } />   
            <h4 className="post__text"> <strong>{ postDeatails != null && postDeatails.topic }</strong> somwthing </h4> 
            <p>{ postDeatails != null && postDeatails.content }</p>  
        </div>
    )
}

export default Post
