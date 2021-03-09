import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar,Nav, Row, Container, Col} from 'react-bootstrap'
import '../App.css';

class Navbarr extends React.Component{
    render(){
        return  <Navbar bg="light" variant="light" >
            <Navbar.Brand><Link to='/'>Date Sidekick</Link></Navbar.Brand>
            <Nav className="mr-right">
            <Nav.Item>
                <Link to='/random'>Random Outing</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to='/custom'>Desgin Outing</Link>
            </Nav.Item>

            {this.props.loggedIn?(
                <>
            <Nav.Item>
                <Link to='/profile'>Profile</Link>
            </Nav.Item>

            <Nav.Item>
                <Link to='' onClick={()=>this.props.logout(this.props.history)}>Logout</Link>
            </Nav.Item>

                </>
            ) : (
                <>
            <Nav.Item>
                <Link to='/signup'>Signup</Link>
            </Nav.Item>

                {/* <Link to='/signup'>Signup</Link> */}
            <Nav.Item>
                <Link to='/login'>Login</Link>
            </Nav.Item>

                
                </>
            )}
            </Nav>
        </Navbar>
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        logout: (history)=>{dispatch(logout(history))}
    }
}

const mapStateToProps=(state)=>{
    return{
        loggedIn: state.authReducer.loggedIn
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbarr))