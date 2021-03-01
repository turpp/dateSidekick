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