import React from 'react'
import {login} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import {Form,Card, Button, Container,Row} from 'react-bootstrap'
import Loader from "react-loader-spinner";

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
       this.props.login(this.state, this.props.history)
    }

    render(){
        if(this.props.loading){
            return <div className='App'>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        }
        return <div id='login'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                
            <Row className="justify-content-md-center">
            <Card style={{width: '35em'}} className="card border-info mb-3 shadow-lg p-3 mb-5 bg-body rounded">
                <Card.Header>
                    <h4>Welcome back!</h4>
                </Card.Header>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control name='username' type='text' value={this.state.username} placeholder='username' onChange={this.handleChange}/>
                <Form.Label>Password:</Form.Label>
                <Form.Control name='password' type='password' value={this.state.password} placeholder='password' onChange={this.handleChange}/>
                </Form.Group>
                <Button type='submit' >Login</Button>

            </Form>
            </Card>
            </Row>
            </Container>
        </div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        login : (user, history)=>{dispatch(login(user,history))}
    }
}
const mapStateToProps =(state)=>{
    return{
        loading: state.authReducer.fetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)