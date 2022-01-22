import axios from 'axios'
import { addBook } from './actions';

export const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers:{
      "Access-Control-Allow-Origin": "*"
    }
  });


export function getPosts(){
    return instance.get(`/posts`)
}

export function getCommments(){
  return instance.get(`/users`)
}

export function getBooks(){
  return instance.get(`/books`)
}

export function addBooks(){
  return instance.post(`/books`)
}