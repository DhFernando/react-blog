import React , { useEffect , useState }  from 'react'
import {useSelector} from 'react-redux'
import './Home.css'
import {Grid , Container, Paper, useMediaQuery, useTheme} from '@material-ui/core'
import {} from '@material-ui/icons'

import Post from '../components/post/Post'

const Home = () => {

    //Responsive Breakpoints
    const theme = useTheme()
    var IsMatch = (point) => {  return useMediaQuery(theme.breakpoints.down(point)) }

    const [ posts , setPost ] = useState([])
    const postReducer = useSelector(state=>state.post)
    
    useEffect(()=>{
        setPost(postReducer.posts)
    },[])


    const ListPost = () =>{
       return posts.map(post =>{
            return(<Post key={ post.id } postDeatails={post} />)
        })
    }
    

    return (
        <div>
            <Container>
                <Grid container >
                    <Grid item  md={3} sm={4} >
                        <ListPost />
                    </Grid>
                    <Grid item className="root_leftside" md={5} sm={8} >
                        <ListPost />
                    </Grid>
                    <Grid item className="root_rightside" md={4} >
                        { IsMatch("sm") === !true && (<Paper className="root_rightside_paper" elevation={5} >
                            <Post postDeatails={posts[0]} />
                        </Paper>)} 
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home
