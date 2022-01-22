import React from "react";
const initialState = {
  books: [
  
  ],
 
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST":
      return state.books;

      case "ADDBOOK":
          console.log(action.payload)
          const newBook=[]
          newBook.push(action.payload)
      return {
          ...state,
          books: [...state.books, ...newBook]
      }
      case "GET_POST_SUCCESS":
        console.log(action.payload)
        return {
            ...state,
            posts: action.payload
        }

        case "GET_COMMENT_SUCCESS":
            console.log(action.payload)
            return {
                ...state,
                comment: action.payload
            }

            case "GET_BOOKS_SUCCESS":
          console.log(action.payload)
          return {
            ...state,
            books: action.payload
          }
    

    default:
      return state
  }
};

export default reducer;
