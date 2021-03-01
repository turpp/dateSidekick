export const signup=(user, history)=>{
    return dispatch=>{
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',

            body: JSON.stringify({user: user})
        })
        .then((resp)=>resp.json())
        .then((json)=>{
        //    debugger
            dispatch({
                type: 'AUTH_SUCCESSFUL',
                 payload: {loggedIn: json.logged_in, currentUser: json.user}
            })
            history.push('/profile')
        })
    }
}


export const login=(user, history)=>{
    return dispatch=>{
        fetch('http://localhost:3000/sessions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then((resp)=>resp.json())
        .then((json)=>{
        //    debugger
            dispatch({
                type: 'AUTH_SUCCESSFUL',
                 payload: {loggedIn: json.logged_in, currentUser: json.user}
            })
            history.push('/profile')
        })
    }
}

export const checkLoggedIn = (callback) =>{
    return(dispatch)=>{
    fetch('http://localhost:3000/logged_in',{
      credentials: 'include'
    }).then(resp=>resp.json()).then(json=>{
      console.log(json)
      dispatch({
          type: 'AUTH_SUCCESSFUL',
          payload: {loggedIn: json.logged_in, currentUser: json.user}
        })
        callback()
    })
}
  }

  export const logout =(history)=>{
      return dispatch=>{
          fetch('http://localhost:3000/logout',{
              method:'DELETE',
              credentials: 'include'
          }).then(resp=>resp.json()).then(json=>{
              dispatch({
                  type: 'LOGOUT'
              })
              history.push('/login')
          })
      }
  }