import React from 'react'
import { useHistory } from "react-router";
import { AppBar , Toolbar , Grid , InputBase , IconButton , Badge , Typography , makeStyles, Button} from '@material-ui/core'
import {ArrowBack , Save , AddCircle} from '@material-ui/icons';


const useStyle = makeStyles({
    title:{
        marginLeft:70,
        marginTop : 8,
        color : "#424242"
    },

    button:{
        marginTop:10,
        color:"#263238",
        fontWeight:600
    }
})

function Header() {

    const classes = useStyle();
    const history = useHistory();

    const goToCreatePostPage = ()=>{
        history.push({ pathname: "/createpost" })
    }
    const goToHome = () =>{
        history.push({ pathname: "/" })
    }

    return (
        <div>
            <AppBar position="static" style={{background:"#eeeeee"}}> 
                <Toolbar>
                    <Grid container>
                        <Grid item sm={6} >
                            <IconButton style={{float:"left"}}>
                                <ArrowBack style={{ color : "#424242" }} />
                            </IconButton>

                            <Typography className={ classes.title }  variant="h6" onClick={()=>goToHome()}>
                                React-Blogger
                            </Typography>
                            
                        </Grid>
                        <Grid item sm={6} >
                            <Button
                                variant="outlined"
                                size="small"
                                className={classes.button}
                                startIcon={<AddCircle style={{ color:"#00e676" }} />}

                                onClick={()=>{ goToCreatePostPage() }}
                            >
                                Create a new post
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
