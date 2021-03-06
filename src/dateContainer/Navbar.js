import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import '../App.css';

class Navbarr extends React.Component{
    render(){
        return  <Navbar collapseOnSelect bg="light" variant="light" expand='md' className='nav'  >
            <Navbar.Brand><Link to='/'>Date Sidekick</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-right">
                
                <Nav.Item>
                    <Link to='/'>Home</Link>
                </Nav.Item>


                <Nav.Item>
                    <Link to='/random-date/new'>Random Outing</Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to='/custom-date/new'>Create Outing</Link>
                </Nav.Item>

                {this.props.loggedIn?(
                    <>
                <Nav.Item>
                    <Link to={`/user/${this.props.user.id}`}>Profile</Link>
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

                <Nav.Item>
                    <Link to='/login'>Login</Link>
                </Nav.Item>                    
                    </>
                )}
            </Nav>
            </Navbar.Collapse>
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
        loggedIn: state.authReducer.loggedIn,
        user: state.authReducer.currentUser
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbarr))