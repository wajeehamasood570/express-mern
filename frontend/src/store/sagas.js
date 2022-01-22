import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as api from './api.js'
import * as actions from './actions'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getPosts(action) {
   try {
      const {data} = yield api.getPosts();
      console.log(data);
      yield put(action.getPostsSuccess(data));
   } catch (e) {
      yield put(action.getPostsFail('error',e));
   }
}

function* getCommments(action) {
  try {
     const {data} = yield api.getCommments();
     console.log(data);
     yield put(action.getCommentsSuccess(data));
  } catch (e) {
     yield put(action.getCommentsFail('error',e));
  }
}

export function* watchGetPost() {
  yield takeLatest("GET_POST", getPosts);
}

export function* watchgetCommments() {
  yield takeLatest("GET_COMMENT", getCommments);
}
  

function* getBooks(action) {
   try {
      const {data} = yield api.getBooks();
      console.log(data);
      yield put(actions.getBooksSuccess(data));
   } catch (e) {
      yield put(actions.getBooksFail('error',e));
   }
 }

  
  
 export function* watcherBooks() {
   yield takeLatest("GET_BOOKS", getBooks);
 }


  export default function* rootSaga() {
    yield all([
      watchGetPost(),
      watchgetCommments(),
      watcherBooks(),
      // watchGetPost(),
        // incrementAsync(),
        // watchIncrementAsync()
    ]);
 }