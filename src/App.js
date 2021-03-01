import logo from './logo.svg';
import './App.css';
import React from 'react'
import Custom from './dateContainer/Custom'
import Random from './dateContainer/Random'
import Login from './dateContainer/Login'
import Home from './datePresentation/Home'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from './dateContainer/Signup'
import Profile from './dateContainer/Profile'


export default class App extends React.Component {
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

render(){
  return (
    <div className="App">
      {/* <body>
        <h4>Welcome to Date Sidekick!</h4>
        <button id='random-date' onClick={this.handleClick} >Random Date</button> 
        <button id='custom-date' onClick={this.handleClick}>Create custom Date</button>
        <button id='sign-in' onClick={this.handleClick}>Sign In</button>
        {this.renderComponet()}
      </body> */}

      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/random' component={Random}/>
          <Route exact path='/custom' component={Custom}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/signup' component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
    }
}

