import logo from './logo.svg';
import './App.css';
import React from 'react'
import Custom from './dateContainer/Custom'
import Random from './dateContainer/Random'
import SignIn from './dateContainer/SignIn'


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
        return <SignIn/>
      default: 

    }
  }

render(){
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <h4>Welcome to Date Sidekick!</h4>
        <button id='random-date' onClick={this.handleClick} >Random Date</button> 
        <button id='custom-date' onClick={this.handleClick}>Create custom Date</button>
        <button id='sign-in' onClick={this.handleClick}>Sign In</button>
        {this.renderComponet()}
      </body>
    </div>
  );
    }
}

