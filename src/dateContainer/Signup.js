import React from 'react'
import {signup} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import { Button, Form,Container,Row,Card, Alert } from 'react-bootstrap'

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
            {this.props.error !== ''?<Alert variant='danger'>{this.props.error}</Alert>: ''}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                
            <Row className="justify-content-md-center">
            <Card style={{width: '35em'}} className="card border-info mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                <Card.Header>
                    <h4>Welcome, Create an Account!</h4>
                </Card.Header>

            <Form onSubmit={this.handleSubmit}>
            <Form.Group>

                <Form.Label>Username:</Form.Label>
                <Form.Control name='username' type='text' value={this.state.username} placeholder='username' onChange={this.handleChange}/>
                <Form.Label>Password:</Form.Label>
                <Form.Control name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/>
                <Form.Label>Password Confirmation:</Form.Label>
                <Form.Control name='password_confirmation' type='password' value ={this.state.password_confirmation} placeholder='retype password' onChange={this.handleChange}/>
                </Form.Group>
                <Button type='submit'>Create Account</Button>
                </Form>
            </Card>
            </Row>
            </Container>
        </div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signup : (user, history)=>{dispatch(signup(user,history))}
    }
}
const mapStateToProps = (state)=>{
    return{
        error: state.authReducer.errorMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)