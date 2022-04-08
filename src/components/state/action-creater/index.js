

const seturl = (urls)=>{
   
   console.log("pgg",urls)
    return(dispatch)=>{
        dispatch({
            type: 'seturl',
            payload: urls
    })
    }
}

export {seturl};