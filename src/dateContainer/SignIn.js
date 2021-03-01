import React from 'react'


export default class SignIn extends React.Component{

    state={
        username: '',
        password: '',
        loginProcess: false
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit=(event)=>{
        // debugger
        event.preventDefault()
        fetch(`http://localhost:3000/users`, {
            method: 'post', 
            headers: { 'Content-Type': 'application/json',
            Authorization: 'nothing' },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(resp=>resp.json()).then(json=>{
            console.log(json)

    }
        )
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
            {this.state.username}
            <br></br>
            {this.state.password}
        </div>
    }
}