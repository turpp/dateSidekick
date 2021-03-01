import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component{

    render(){
        debugger
       return <div>Welcome {this.props.user.username}, this is your profile</div>
    }
}

const mapStateToProps =(state)=>{
    return {
        user: state.authReducer.currentUser
    }
}
export default connect(mapStateToProps)(Profile)