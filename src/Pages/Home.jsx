import React , { useEffect , useState }  from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {setDate} from '../redux/index'

import {Divider} from '@material-ui/core'

import Post from '../components/post/Post'

const Home = () => {

    const dispatch = useDispatch()
    const [ data , _setDate ] = useState(null)
    const [ posts , setPost ] = useState([])
    const testReducer = useSelector(state=>state.test)
    const postReducer = useSelector(state=>state.post)
    
    useEffect(()=>{
        _setDate(testReducer.test) 
        setPost(postReducer.posts)
    },[])

    useEffect(()=>{
        _setDate(testReducer.test)
    } , [testReducer.test])

    const clicked = () =>{
        dispatch(setDate())
    }

    const ListPost = () =>{
       return posts.map(post =>{
            return(<Post postDeatails={post} />)
        })
    }
    

    return (
        <div>
            <ListPost />
            
        </div>
    )
}

export default Home
