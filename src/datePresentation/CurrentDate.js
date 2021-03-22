import React from 'react'
import FoodSelection from './FoodSelection'
import ActivitySelection from './ActivitySelection'
import {Card, Container, Row, Button,Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import {saveFoodDate} from '../redux/actions/dateActions'
import {saveFoodActivityDate} from '../redux/actions/dateActions'
import {withRouter} from 'react-router-dom'
import SelectionCard from './SelectionCard'

class CurrentDate extends React.Component{

    handleFoodDate=(event)=>{
        this.props.saveFoodDate(this.props.food, this.props.user, this.props.history)
    }

    handleFoodActivityDate=(event)=>{
        if(!Array.isArray(this.props.food) && !Array.isArray(this.props.activity)){
        this.props.saveFoodActivityDate(this.props.food, this.props.activity, this.props.user, this.props.history)
        }else{
            alert("Make sure to add both a food and activity to date before saving.")
        }
    }


    renderCurrentDate=()=>{
        switch(this.props.type){
            case('food'):
            if(!Array.isArray(this.props.food)){
                return <div>
                    <Card >
                        <Card.Header>
                            <h4>Current Date</h4>
                        </Card.Header>
                        <SelectionCard activity={this.props.food} addActivityToDate={''} random='true' />
                        <Card.Footer>
                            {this.props.loggedIn?<Button onClick={()=>this.handleFoodDate()}>Save date to profile</Button>:"Login or Signup to save"}
                        </Card.Footer>
                    </Card>
                <br></br>
                <br></br>
                </div>
            } else {
                return <h4>Select a place to eat from below</h4>
            }
            case('food-activity'):
            if(Array.isArray(this.props.food)&&(Array.isArray(this.props.activity))){
                return <h4><u>Select a place to eat and something to do from below</u></h4>
            }else{
                return <div>
                    <Card >
                        <Card.Header>
                            <h4>Current Date</h4>
                        </Card.Header>
                        <Container>
                            <Row>
                        {!Array.isArray(this.props.food)? <SelectionCard activity={this.props.food} addActivityToDate='' random = 'true'/>: ''}
                        {!Array.isArray(this.props.activity)? <SelectionCard activity={this.props.activity} addActivityToDate={''} random='true'/> : ''}
                        </Row>
                        </Container>
                        <Card.Footer>
                            {this.props.loggedIn?<Button variant = 'success' onClick={()=>this.handleFoodActivityDate()}>Save date to profile</Button>:"Login or Signup to save"}
                        </Card.Footer>
                    </Card>
                <br></br>
                <br></br>
                </div>
            }
            default:
                return <div>
                    <h4><u>Select a place to eat from below</u></h4>
                </div>
        }
    }

    render(){
        return <div>
            {this.renderCurrentDate()}</div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        saveFoodDate: (food,user,history)=>{dispatch(saveFoodDate(food,user, history))},
        saveFoodActivityDate: (food,activity,user,history)=>{dispatch(saveFoodActivityDate(food,activity,user,history))}
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.authReducer.currentUser,
        loggedIn: state.authReducer.loggedIn
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrentDate))