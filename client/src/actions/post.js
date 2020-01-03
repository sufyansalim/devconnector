import { 
GET_POSTS,
POSTS_ERROR,
UPDATE_LIKES,
DELETE_POST,
ADD_POST,
GET_POST,
ADD_COMMENT,
REMOVE_COMMENT
} from './types';
import axios from 'axios';
import {setAlert} from './alert';

export const getPosts = () => async dispatch => {
    try{
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data

        })

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const getPost = (id) => async dispatch => {
    try{
        const res = await axios.get(`/api/posts/${id}`);

        dispatch({
            type: GET_POST,
            payload: res.data

        })

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const addLike = (id) => async dispatch => {
    try{
        const res = await axios.put(`/api/posts/like/${id}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {id,likes: res.data}

        })

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const removeLike = (id) => async dispatch => {
    try{
        const res = await axios.put(`/api/posts/unlike/${id}`);

        dispatch({
            type: UPDATE_LIKES,
            payload: {id,likes: res.data}

        })

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const deletePost = (id) => async dispatch => {
    try{
        await axios.delete(`/api/posts/${id}`);

        dispatch({
            type: DELETE_POST,
            payload: id

        })

        dispatch(setAlert('Post Removed','success'))

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const addPost = (formData) => async dispatch => {

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const res = await axios.post('/api/posts',formData,config);

        dispatch({
            type: ADD_POST,
            payload: res.data

        })

        dispatch(setAlert('Post Created','success'))

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const addComment = (postId,formData) => async dispatch => {

    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }

    try{
        const res = await axios.post(`/api/posts/comment/${postId}`,formData,config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data

        })

        dispatch(setAlert('Post Created','success'))

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}

export const deleteComment = (postId,commentId) => async dispatch => {


    try{
        const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);

        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId

        })

        dispatch(setAlert('Post Removed','success'))

    }catch(err){
       
        dispatch({
            type: POSTS_ERROR,
            payload: {msg:err.response.statusText, status:err.response.status}
            });
    }
}