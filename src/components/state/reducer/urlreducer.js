 const reducer = (state = "https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602", action)=>{
   console.log(action);
   if(action==='seturl'){
      return state = action.payload;
     }
     else{
       return state
     }
}
export default reducer;