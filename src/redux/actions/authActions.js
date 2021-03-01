export const signup=user=>{
    return dispatch=>{
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        })
        .then((resp)=>resp.json())
        .then((json)=>{
           console.log(json)
            dispatch({
                type: 'AUTH_SUCCESSFUL',
                 payload: {loggedIn: json.logged_in, currentUser: json.user}
            })
        })
    }
}