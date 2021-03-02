import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component{
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



    fetch(`http://localhost:3000/users/${this.props.user.id}`).then(resp=>resp.json()).then(json=>{
        console.log(json)
        this.setState({
            activities: json.activities,
            dates: json.outings
        })
    
    })
}

renderActivities=()=>{
    if(this.state.activities.length >0){
        return this.state.activities.map(activity =>{
            return <li>{activity.name}</li>
        })
    }
}
    render(){
        // debugger
       return <div>
           <h2>Welcome {this.props.user.username}, this is your profile</h2>
           <h4>Dates you have saved</h4>
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
export default connect(mapStateToProps)(Profile)