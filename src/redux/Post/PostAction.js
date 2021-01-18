
export const publishPost = (newPost) => {
    return dispatch => {
        dispatch({
            type: "PUBLISH_POST",
            payload: newPost
        })
    }
}