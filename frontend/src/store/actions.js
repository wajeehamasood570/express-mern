export const addBook = (payload) => {
    return {type:'ADDBOOK',payload}
}
export const showBooks = () =>{
    return {type: 'LIST'}
}

export const inc = () => {
    return {type:'INC'}
}


export const getPosts = () =>{
    return {type: 'GET_POST'}
}
export const getPostsSuccess = (payload) =>{
console.log("🚀 ~ file: actions.js ~ line 12 ~ getPostsSuccess ~ payload", payload)
    
    return {type: 'GET_POST_SUCCESS', payload}
}
export const getPostsFail = (payload) =>{
    return {type: 'GET_POST_FAIL', payload}
} 

export const getCommments = () =>{
    // console.log("🚀 ~ file: actions.js ~ line 23 ~ getCommments ~ getCommments")
    return {type: 'GET_COMMENT'}
}
export const getCommentsSuccess = (payload) =>{
    console.log("🚀 ~ file: actions.js ~ line 28 ~ getCommentsSuccess ~ payload", payload)
    return {type: 'GET_COMMENT_SUCCESS', payload}
   
}
export const getCommentsFail = (payload) =>{
    console.log("🚀 ~ file: actions.js ~ line 31 ~ getCommentsFail ~ getCommentsFail", payload)
    return {type: 'GET_COMMENT_FAIL', payload}
} 


export const getBooks = () =>{
    return {type: 'GET_BOOKS'}
}
export const getBooksSuccess = (payload) =>{
console.log("🚀 ~ file: actions.js ~ line 12 ~ getPostsSuccess ~ payload", payload)
    
    return {type: 'GET_BOOKS_SUCCESS', payload}
}
export const getBooksFail = (payload) =>{
    return {type: 'GET_BOOKS_FAIL', payload}
}


export const addBooks = () => {
    return {type:'ADD_BOOKS'}
}

export const addBooksSuccess = (payload) =>{
    console.log("🚀 ~ file: actions.js ~ line 12 ~ getBooksSuccess ~ payload", payload)
        
        return {type: 'ADD_BOOKS_SUCCESS', payload}
    }
    export const addBooksFail = (payload) =>{
        return {type: 'ADD_BOOKS_FAIL', payload}
    }
    

