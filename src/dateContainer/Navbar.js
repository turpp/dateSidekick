import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
class Navbarr extends React.Component{
    render(){
        return  <Navbar bg="light" variant="light" >
            <Navbar.Brand><Link to='/'>Date Sidekick</Link></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Item>
                <Nav.Link><Link to='/random'>Random Outing</Link></Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link><Link to='/custom'>Desgin Outing</Link></Nav.Link>
            </Nav.Item>

            {this.props.loggedIn?(
                <>
            <Nav.Item>
                <Nav.Link><Link to='/profile'>Profile</Link></Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link><Link to='' onClick={()=>this.props.logout(this.props.history)}>Logout</Link></Nav.Link>
            </Nav.Item>

                </>
            ) : (
                <>
            <Nav.Item>
                <Nav.Link><Link to='/signup'>Signup</Link></Nav.Link>
            </Nav.Item>

                {/* <Link to='/signup'>Signup</Link> */}
            <Nav.Item>
                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
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