import React , { useState , useRef } from 'react'
import './CreatePost.css'

import Post from '../post/Post'

import { Grid, Typography, TextField, makeStyles, Button } from '@material-ui/core'
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
    const prevPostRef = useRef();

    const initValue = { 
        username:"Dh Fernando",
        topic:null,
        imageUrl:null,
        content:null
     }

    const [deatails, setDeatails] = useState(initValue)
   
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
                            /> 
                            <TextField className={classes.root__input} variant="outlined" label="Content" placeholder="Enter the Content here...!" 
                                onChange={ (e)=>{ setDeatails({ ...deatails, content: e.target.value}) } }
                            /> 
                            <TextField className={classes.root__input} variant="outlined" label="ImageUrl" placeholder="http://someurl.com/picture.png" 
                                onChange={ (e)=>{ setDeatails({ ...deatails, imageUrl: e.target.value}) } }
                            /> 

                            <Button 
                                className={classes.form__button}
                                startIcon={<CloudUpload style={{ color:"#00e676" }} />}
                            > Published </Button>

                        </div>  
                    </Grid>
                    <Grid style={{ backgroundColor:"#f5f5f5" , padding:15 , border:"1px solid #558b2f" }} item xs={6}>
                            <Post postDeatails={ deatails } />
                            {JSON.stringify(deatails)}
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default ImageUploading
