import React from 'react'


export default class SignIn extends React.Component{

    state={
        username: '',
        password: ''
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return <div>
            <form>
                <label>Username:</label>
                <input name='username' type='text' value={this.state.username} placeholder='username' onChange={this.handleChange}/>
                <label>Password:</label>
                <input name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
            {this.state.username}
            <br></br>
            {this.state.password}
        </div>
    }
}