import React, { useEffect } from 'react'
import { getPosts } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux';


const Posts = () => {

    const dispatch = useDispatch();
    const [posts, setposts] = React.useState([])
    React.useEffect(() => {
        dispatch(getPosts())
    }, [])
    const state = useSelector(state => state.posts)

    React.useEffect(() => {
        setposts(state)
    }, [state])
    // console.log("🚀 ~ file: ShowPosts.js ~ line 13 ~ ShowPosts ~ user", state)

    return (
        <>
      
        <div className='po'>
                {posts ? posts.map(item => (
                    <div>{item.title}</div>
                )) : 'loading'}
            </div>
            </>
    )
}

export default Posts