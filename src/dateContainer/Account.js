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
        fetch(`${fetchUrl()}/users/${this.props.user.id}`).then(resp=>resp.json()).then(json=>{
            let activities = []
            let outings =[]
            json.included.forEach(data=>{
                if(data.type==='activity'){
                    activities.push(data)
                } else {
                    outings.push(data)
                }
            })
            this.setState({
                activities: activities,
                dates: outings
            })
        })
    }

    renderActivities=()=>{
        if(this.state.activities.length >0){
            return this.state.activities.map(activity =>{
                return <ActivitySelection activity={activity.attributes} addActivityToDate={''} random='true'/>
            })
        }
    }

    renderDates=()=>{
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