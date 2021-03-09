import {fetchUrl} from '../../url'

export const signup=(user, history)=>{
    return dispatch=>{
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
            history.push('/profile')
        }
        })
    }
}


export const login=(user, history)=>{
    return dispatch=>{
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

export const saveFoodDate = (food, user, history)=>{
    return dispatch=>{
        fetch(`${fetchUrl()}/outings`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({food: food, user: user, type: 'food'})
          }).then(resp=>resp.json()).then(json=>{
                dispatch({
                type: 'NOTHING'
            })
              history.push('/profile')
        })
    }
}

export const saveFoodActivityDate = (food, activity, user, history)=>{
    return dispatch=>{
        fetch(`${fetchUrl()}/outings`, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
        },
            credentials: 'include',
            body: JSON.stringify({food: food, activity: activity, user: user, type: 'foodActivity'})
        }).then(resp=>resp.json()).then(json=>{
            dispatch({
              type: 'NOTHING'
            })
            history.push('/profile')
        })
    }
}


export const deleteDate =(date, history)=>{
    return dispatch=>{
        fetch(`${fetchUrl()}/outings/${date.id}`, {
            method:'DELETE',
            credentials: 'include'
        } ).then(resp=>resp.json()).then(json=>{
            dispatch({
                type:'NOTHING'
            })
            window.location.reload()
        })
    }
}

export const editDate =(outing, notes, date)=>{
    // let dateObj = new Date(date)
    // let formatedDate = dateObj.toDateString()
    // debugger
    return dispatch =>{
        fetch(`${fetchUrl()}/outings/${outing.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
          },
            credentials: 'include',
            body: JSON.stringify({outing:{notes: notes, date:date}})
        }).then(resp=>resp.json()).then(json=>{
            dispatch({
                type: 'NOTHING'
            })
            window.location.reload()
        })
    }
}
