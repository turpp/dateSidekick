import {fetchUrl} from '../../url'

export const signup=(user, history)=>{
    return dispatch=>{
        dispatch({type: 'STARTING_FETCH'})
        fetch(`${fetchUrl()}/users`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then((resp)=>resp.json())
        .then((json)=>{
            if(!!json.message){
                dispatch({
                    type: 'AUTH_FAILED',
                    payload: {errorMessage: json.message}
                })
                history.push('/signup')
            }else{
            dispatch({
                type: 'AUTH_SUCCESSFUL',
                 payload: {loggedIn: json.logged_in, currentUser: json.user}
            })
            history.push(`/user/${json.user.id}`)
        }
        })
    }
}


export const login=(user, history)=>{
    return dispatch=>{
        dispatch({type: 'STARTING_FETCH'})
        fetch(`${fetchUrl()}/sessions`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then((resp)=>resp.json())
        .then((json)=>{
            if(!!json.message){
                dispatch({
                    type: 'AUTH_FAILED',
                    payload: {errorMessage: json.message}
                })
                history.push('/login')
            }else{
            dispatch({
                type: 'AUTH_SUCCESSFUL',
                 payload: {loggedIn: json.logged_in, currentUser: json.user}
            })
            history.push(`/user/${json.user.id}`)
        }
        })
    }
}

export const checkLoggedIn = (callback) =>{
    return(dispatch)=>{
        fetch(`${fetchUrl()}/logged_in`,{
            credentials: 'include'
            }).then(resp=>resp.json()).then(json=>{
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
        fetch(`${fetchUrl()}/logout`,{
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

