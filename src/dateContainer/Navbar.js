import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        console.log(this.props.loggedIn)

        return <div>
            <Link to='/'>Home</Link>
            {this.props.loggedIn?(
                <>
            <Link to='/profile'>Profile</Link>
            <Link to='' onClick={()=>this.props.logout(this.props.history)}>Logout</Link>
                </>
            ) : (
                <>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Login</Link>
                </>
            )}

        </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))