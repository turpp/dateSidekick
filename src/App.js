import logo from './logo.svg';
import './App.css';
import React from 'react'
import Custom from './dateContainer/Custom'
import Random from './dateContainer/Random'
import Login from './dateContainer/Login'
import Home from './datePresentation/Home'
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Signup from './dateContainer/Signup'
import Account from './dateContainer/Account'
import Navbarr from './dateContainer/Navbar'
import {checkLoggedIn} from './redux/actions/authActions'
import {connect} from 'react-redux'
import LoaderWheel from './datePresentation/LoaderWheel'
import {Container} from 'react-bootstrap'
import RandomFood from './datePresentation/RandomFood'
import RandomFoodActivity from './datePresentation/RandomFoodActivity'

class App extends React.Component {
  
  state={
    loading: true
  }

  toggleLoading =()=>{
    this.setState({
      loading: !this.state.loading
    })
  }

  componentDidMount(){
    this.props.checkLoggedIn(this.toggleLoading)
  }

  render(){
    if(this.state.loading) return  <div className='App'>
    <LoaderWheel/>
  </div>
    return (
      <div className="App">
        <Router>
          <Navbarr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/random-date/new' component={Random}/>
            <Route path='/random-food-dates/:zipcode' render={routerProps=><RandomFood {...routerProps}/>}/>
            <Route path='/random-food-activity-dates/:zipcode' render={routerProps=><RandomFoodActivity {...routerProps}/>}/>
            <Route exact path='/custom-date/new' component={Custom}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/user/:id'render={props=>{
              if(this.props.loggedIn){
                return <Account {...props}/>
              }else{
                return <Redirect to='/login'/>
              }
            }}  />
            <Route exact path='/signup' component={Signup}/>
          </Switch>
        </Router>
      </div>
    );
  }

}

const mapDispatchToProps=(dispatch)=>{
  return {
    checkLoggedIn: (callback)=>{dispatch(checkLoggedIn(callback))}
  }
}

const mapStateToProps=(state)=>{
  return {
    loggedIn: state.authReducer.loggedIn,
    user: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

