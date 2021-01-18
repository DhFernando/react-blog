import React , { useState , useRef , useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import {publishPost} from '../../redux/index'
import './CreatePost.css'

import Post from '../post/Post'

import { Grid, TextField, makeStyles, Button } from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons';



const useStyle = makeStyles({
    root__input:{
        marginBottom:10,
    },
    form__button:{
        maxWidth:150,
        border:"2px solid #76ff03"
    }
})

function ImageUploading() {

    const classes = useStyle();
    
    const dispatch = useDispatch();
    const history = useHistory();
    

    const topicRefe = useRef(null);
    const contentRefe = useRef(null);
    const imageUrlRefe = useRef(null);
    const publishBtnRefe = useRef(null);

    const initValue = { 
        username:"Dh Fernando",
        topic:null,
        imageUrl:null,
        content:null
     }

     useEffect(()=>{ 
        topicRefe.current.children[1].children[0].focus()
     },[])

    const [deatails, setDeatails] = useState(initValue)
   
    const publish = async () =>{
        await dispatch(publishPost(deatails))
        history.push({pathname : "/"})
    } 

    const topicKeyDown = (e)=>{ if(e.key === "Enter") {contentRefe.current.children[1].children[0].focus()} }
    const contentKeyDown = (e)=>{ if(e.key === "Enter") imageUrlRefe.current.children[1].children[0].focus() }
    const imageUrlKeyDown = (e)=>{ 
        if(e.key === "Enter") {publishBtnRefe.current.focus() }
    }

    return (
        <div>
            <form>
                <Grid container>
                    <Grid item xs={12}>
                        <p className="root__header" > Create a New Post </p>
                    </Grid>
                    <Grid style={{ padding:15 }} item xs={6}>
                        <div className="root__inputContainer" >
                            <TextField className={classes.root__input}  variant="outlined" label="Topic" placeholder="Enter the topoc here...!" 
                                onChange={ (e)=>{ setDeatails({ ...deatails, topic: e.target.value}) } }
                                onKeyDown={ (e)=>{ topicKeyDown(e) } }
                                ref={topicRefe}
                            /> 
                            <TextField className={classes.root__input} variant="outlined" label="Content" placeholder="Enter the Content here...!" 
                                onChange={ (e)=>{ setDeatails({ ...deatails, content: e.target.value}) } }
                                onKeyDown={ (e)=>{ contentKeyDown(e) } }
                                ref={contentRefe}
                            /> 
                            <TextField className={classes.root__input} variant="outlined" label="ImageUrl" placeholder="http://someurl.com/picture.png" 
                                onChange={ (e)=>{ setDeatails({ ...deatails, imageUrl: e.target.value}) } }
                                onKeyDown={ (e)=>{ imageUrlKeyDown(e) } }
                                ref={imageUrlRefe}
                            /> 

                            <Button 
                                className={classes.form__button}
                                startIcon={<CloudUpload style={{ color:"#00e676" }} />}
                                onClick={(e)=>{
                                    e.preventDefault()
                                    publish()
                                }}
                                ref={publishBtnRefe}
                            > Published </Button>

                        </div>  
                    </Grid>
                    <Grid style={{ backgroundColor:"#f5f5f5" , padding:15 , border:"1px solid #558b2f" }} item xs={6}>
                            <Post postDeatails={ deatails } />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default ImageUploading
