import {fetchUrl} from '../../url'


export const saveFoodDate = (food, user, history)=>{
    return dispatch=>{
        dispatch({type: 'STARTING_FETCH'})
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
        dispatch({type: 'STARTING_FETCH'})
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
        dispatch({type: 'STARTING_FETCH'})
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
