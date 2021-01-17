
export const setDate = () => {
    return dispatch => {
        dispatch({
            type: "SET_DATA",
            payload: "Hey_updated"
        })
    }
}

// export const setDate = () =>{
//     return {
//         type: "SET_DATA",
//         payload: "Hey_updated"
//     }
// }