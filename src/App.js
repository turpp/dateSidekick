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
import Navbar from './dateContainer/Navbar'
import { compose } from 'redux';
import {checkLoggedIn} from './redux/actions/authActions'
import {connect} from 'react-redux'
import {redirect} from 'react-router-dom'
import {fetchUrl} from './url'


class App extends React.Component {
  state={
    activeButton: ''
  }
  
  handleClick=(event)=>{
    switch(event.target.id){
      case('custom-date'):
        this.setState({
          activeButton: 'custom-date'
        })
      break
      case('random-date'):
        this.setState({
          activeButton: 'random-date'
        })
      break
      case('sign-in'):
        this.setState({
          activeButton: 'sign-in'
        })
      break
      default:
        return <p>Sorry button is under service. Check back later.</p>
    }
  }

  renderComponet=()=>{
    switch(this.state.activeButton){
      case 'custom-date':
        return <Custom/>
      case 'random-date':
        return <Random/>
      case 'sign-in':
        return <Login/>
      default: 
    }
  }
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
    console.log(fetchUrl())
    if(this.state.loading) return <h1>Loading...</h1>
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/random' component={Random}/>
            <Route exact path='/custom' component={Custom}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/profile' render={props=>{
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
    loggedIn: state.authReducer.loggedIn
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

