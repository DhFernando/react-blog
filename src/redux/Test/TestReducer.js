const initialState = {
    test : "hey"
}

const testReducer = (state = initialState , action) => {
    if(action.type === "SET_DATA"){
       
        return {
            ...state,
           test : action.payload
        }
    }else{
        return state
    }

    
}

export default testReducer