import React from 'react'
import {login} from '../redux/actions/authActions'
import {connect} from 'react-redux'

class Login extends React.Component{

    state={
        username: '',
        password: '',
    }


    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        // debugger
       this.props.login(this.state, this.props.history)
}


    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input name='username' type='text' value={this.state.username} placeholder='username' onChange={this.handleChange}/>
                <label>Password:</label>
                <input name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/>
                <input type='submit'/>
                
            </form>

        </div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        login : (user, history)=>{dispatch(login(user,history))}
    }
}

export default connect(null, mapDispatchToProps)(Login)