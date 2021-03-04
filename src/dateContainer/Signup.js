import React from 'react'
import {signup} from '../redux/actions/authActions'
import {connect} from 'react-redux'

class Signup extends React.Component{

    state={
        username: '',
        password: '',
        password_confirmation: '',
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.signup(this.state, this.props.history)
}

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input name='username' type='text' value={this.state.username} placeholder='username' onChange={this.handleChange}/>
                <label>Password:</label>
                <input name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/>
                <label>Password Confirmation:</label>
                <input name='password_confirmation' type='password' value ={this.state.password_confirmation} placeholder='retype password' onChange={this.handleChange}/>
                <input type='submit'/> 
            </form>
        </div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signup : (user, history)=>{dispatch(signup(user,history))}
    }
}

export default connect(null, mapDispatchToProps)(Signup)