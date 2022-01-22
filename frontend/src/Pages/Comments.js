import React, { useEffect } from 'react'
import { getCommments, getPosts } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux';


const Comments = () => {

    const dispatch = useDispatch();
    const [comment, setcomment] = React.useState([])
    React.useEffect(() => {
        dispatch(getCommments())
    }, [])
    const state = useSelector(state => state.comment)

    React.useEffect(() => {
        setcomment(state)
    }, [state])
   

    return (
        <>
      
        <div className='po'>
      
         
                {comment ? comment.map(item => (
                    <div>{item.email}</div>
                )) : 'loading'}
            </div>
            </>
    )
}

export default Comments