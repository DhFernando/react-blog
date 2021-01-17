
export const postPost = (newPost) => {
    return dispatch => {
        dispatch({
            type: "POST_POST",
            payload: newPost
        })
    }
}