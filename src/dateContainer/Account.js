import React from 'react'
import {connect} from 'react-redux'
import ActivitySelection from '../datePresentation/ActivitySelection'
import PastDate from '../datePresentation/PastDate'
import {fetchUrl} from '../url'

class Account extends React.Component{
    state={
        activities: [],
        dates: []
    }
componentDidMount(){
    // debugger
    // fetch(`http://localhost3000/users/${this.props.user.id}`,{
    //     method: 'GET',
    //     credentials: 'include'
        
    // }).then(resp=>resp.json()).then(json=>{
    //     console.log(json)
    // })



    // fetch(`http://localhost:3000/users/${this.props.user.id}`).then(resp=>resp.json()).then(json=>{
        // console.log(json)
        // fetch(`https://gentle-inlet-80267.herokuapp.com/users/${this.props.user.id}`).then(resp=>resp.json()).then(json=>{

            fetch(`${fetchUrl()}/users/${this.props.user.id}`).then(resp=>resp.json()).then(json=>{
                // debugger

//need to get the activites to save to store corecctly and then it will be working
// I need the activites to be saved as an array of objects
// I have to figure out a way to get the two activiy date to just be objects and not arrays
            let activities = []
            let outings =[]
            json.included.forEach(data=>{
                if(data.type==='activity'){
                 activities.push(data)
                } else {
                    outings.push(data)
                }
            })
            



        // debugger
        this.setState({
            activities: activities,
            dates: outings
        })
    
    })
}

renderActivities=()=>{
    // debugger
    if(this.state.activities.length >0){
        return this.state.activities.map(activity =>{
            return <ActivitySelection activity={activity.attributes} addActivityToDate={''} random='true'/>
        })
    }
}

renderDates=()=>{
    // debugger
    if(this.state.dates.length >0){
        return this.state.dates.map(date=>{
            if(date.attributes.activities.length == 1){
            return <PastDate date={date.attributes} type='food'/>
            }else{
            return <PastDate date={date.attributes} type='food-activity'/>

            }
        })
        
    }
}
    render(){
        // debugger
       return <div>
           <h2>Welcome {this.props.user.username}, this is your profile</h2>
           <h4>Dates you have saved</h4>
           {this.renderDates()}

           <h4>All Food and Places you have saved</h4>
           <ul> Total places = {this.state.activities.length}
           {this.renderActivities()}
           </ul>
       </div>
    }
}

const mapStateToProps =(state)=>{
    return {
        user: state.authReducer.currentUser
    }
}
export default connect(mapStateToProps)(Account)