import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../redux/actions/authActions'
import {connect} from 'react-redux'

class Navbar extends React.Component{

    render(){
        return <div>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/login'>Login</Link>
            <Link to='' onClick={()=>this.props.logout()}>Logout</Link>

        </div>
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        logout: ()=>{dispatch(logout())}
    }
}
export default connect(null, mapDispatchToProps)(Navbar)