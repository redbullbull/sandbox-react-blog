import jsonPlaceholder from '../apis/jsonPlaceHolder'

export const fetchPosts = () =>  async dispatch => {
        const response = await jsonPlaceholder.get('/posts')
        dispatch({
            type:'FETCH_POSTS',
            payload: response
        }) 
    }
