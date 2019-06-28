import {
  POST_ERROR,
  GET_POSTS,
  UPDATE_LIKES
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(
          post => post._id === payload.post_id ? {
            ...post, likes: payload.likes
          } : post
        ),
        loading: false
      }
    default:
      return state
  }
}