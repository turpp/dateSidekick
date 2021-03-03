import {fetchUrl} from '../../url'

export const signup=(user, history)=>{
    return dispatch=>{
        // fetch('http://localhost:3000/users',{
            // fetch('https://gentle-inlet-80267.herokuapp.com/users',{
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
        // fetch('http://localhost:3000/sessions',{
            // fetch('https://gentle-inlet-80267.herokuapp.com/sessions',{
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
    // fetch('http://localhost:3000/logged_in',{
        // fetch('https://gentle-inlet-80267.herokuapp.com/logged_in',{
    fetch(`${fetchUrl()}/logged_in`,{

      credentials: 'include'
    }).then(resp=>resp.json()).then(json=>{
    //   console.log(json)
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
        //   fetch('http://localhost:3000/logout',{
            // fetch('https://gentle-inlet-80267.herokuapp.com/logout',{
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
        //   fetch('http://localhost:3000/outings', {
            // fetch('https://gentle-inlet-80267.herokuapp.com/outings', {
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
        // fetch('http://localhost:3000/outings', {
            // fetch('https://gentle-inlet-80267.herokuapp.com/outings', {
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
    // debugger
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
