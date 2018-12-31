import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async function(dispatch) {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };


// action creator fetchUser calls _fetchUser (lodash based function for making only one call to API for         fetching user)
export const fetchUser = (id) => dispatch => {
    _fetchUser(id, dispatch);


    // const response = await jsonPlaceholder.get(`/users/${id}`);
    // dispatch({ type: 'FETCH_USER', payload: response.data });
};

//private function to interact w/ Lodash library, we are memoizing our action creator

const _fetchUser = _.memoize( async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});