import React , {useState} from 'react'
import { useHistory } from "react-router";
import { AppBar , Toolbar , Grid , IconButton,
     Typography , makeStyles, Button, useMediaQuery, useTheme, ButtonGroup 
} from '@material-ui/core'
import {ArrowBack , AddCircle} from '@material-ui/icons';

import Drawer from './Drawer'


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
    },

    navbar:{
        position:"fixed",
        top:0,
        width:"100%"
    },
    nav_right:{
        display:"flex",
        justifyContent:"space-between"
    }
})

function Header() {
    //Responsive Breakpoints
    const theme = useTheme()
    var IsMatch = (point) => {  return useMediaQuery(theme.breakpoints.down(point)) }
    
    const classes = useStyle();
    const history = useHistory();
    
    const goToCreatePostPage = ()=>{
        history.push({ pathname: "/createpost" })
    }
    const goToHome = () =>{
        history.push({ pathname: "/" })
    }

    const [openDrawer, setOpenDrawer] = useState(false)
    const handleDrawer = (open) =>{
        setOpenDrawer(open)
    }

    return (
        <div className={classes.navbar} >
            <AppBar position="static" style={{background:"#eeeeee"}}> 
                <Toolbar>
                    <Grid container>
                        <Grid item sm={6} >
                            {IsMatch("sm") ? (<IconButton style={{float:"left"}}  onClick={ ()=>handleDrawer(true) }>
                                <ArrowBack style={{ color : "#424242" }} />
                            </IconButton>) : null}

                            <Typography className={ classes.title }  variant="h6" onClick={()=>goToHome()}>
                                React-Blogger 
                            </Typography>
                            
                        </Grid>
                        <Grid className={classes.nav_right} item sm={6} >
                            <div>
                                {!IsMatch("sm") ? (<Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    startIcon={<AddCircle style={{ color:"#00e676" }} />}

                                    onClick={()=>{ goToCreatePostPage() }}
                                >
                                    Create a new post
                                </Button>) : null}
                            </div>
                            <div>
                                <ButtonGroup>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<AddCircle style={{ color:"#00e676" }} />}

                                        onClick={()=>{ goToCreatePostPage() }}
                                    >
                                        login
                                    </Button>
                                    {!IsMatch("sm") && (<Button
                                        variant="outlined"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<AddCircle style={{ color:"#00e676" }} />}

                                        onClick={()=>{ goToCreatePostPage() }}
                                    >
                                        Register
                                    </Button>)}
                                    {!IsMatch("sm") && (<Button
                                        variant="outlined"
                                        size="small"
                                        className={classes.button}
                                        startIcon={<AddCircle style={{ color:"#00e676" }} />}

                                        onClick={()=>{ goToCreatePostPage() }}
                                    >
                                        logout
                                    </Button>)}
                                </ButtonGroup>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            
            <Drawer open={ openDrawer } handleDrawer={ handleDrawer }  />

        </div>
    )
}

export default Header
