export const GET_GAMES = "GET_GAMES";



export const getGames = () => {
return function(dispatch) {
    fetch("https://api.rawg.io/api/games?key=dd5ac8bc618b4e5983fd505fc3de3e27")
  .then((response)=> {
    return response.json();
  })
  .then((data)=>{
    dispatch({
        type:GET_GAMES,
        payload:data,
    })
  })
  .catch((err)=> console.log(err))
 }
};

