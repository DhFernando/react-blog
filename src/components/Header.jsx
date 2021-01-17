import React from 'react'
import { AppBar , Toolbar , Grid , InputBase , IconButton , Badge , Typography , makeStyles} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons';

const useStyle = makeStyles({
    title:{
        marginLeft:70,
        marginTop : 8,
        color : "#424242"
    }
})

function Header() {

    const classes = useStyle()

    return (
        <div>
            <AppBar position="static" style={{background:"#eeeeee"}}> 
                <Toolbar>
                    <Grid container>
                        <Grid item sm={6} >
                            <IconButton style={{float:"left"}}>
                                <ArrowBack style={{ color : "#424242" }} />
                            </IconButton>

                            <Typography className={ classes.title }  variant="h6">
                                React-Blogger
                            </Typography>
                            
                        </Grid>
                        <Grid item sm={6} >
                            <IconButton >
                                <Badge >
                                    
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
