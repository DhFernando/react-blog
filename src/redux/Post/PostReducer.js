const initialState = {
    posts : [
        {id:1,  
         username : "DH Fernando",
         topic : "Beauty of Nature",
         imageUrl : "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" ,
         content:"This is beautiful image" },

         {id:2,  
            username : "Dilshan Fernando",
            topic : "Beauty of Butterfly",
            imageUrl : "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" ,
            content:"This is beautiful butterFly" }
    ]
}

const testReducer = (state = initialState , action) => {
    if(action.type === "POST_POST"){
        return {
            ...state,
           posts : [ ...state.posts , action.payload ]
        }
    }else{
        return state
    }

    
}

export default testReducer