import React from 'react'
import FoodSelection from './FoodSelection'
import ActivitySelection from './ActivitySelection'
import {Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import {saveFoodDate} from '../redux/actions/authActions'
import {saveFoodActivityDate} from '../redux/actions/authActions'
import {withRouter} from 'react-router-dom'

class CurrentDate extends React.Component{

    handleFoodDate=(event)=>{
        this.props.saveFoodDate(this.props.food, this.props.user, this.props.history)
    }

    handleFoodActivityDate=(event)=>{
        this.props.saveFoodActivityDate(this.props.food, this.props.activity, this.props.user, this.props.history)
    }

    renderCurrentDate=()=>{
        switch(this.props.type){
            case('food'):
            if(!Array.isArray(this.props.food)){
                return <div>
                    <Card>
                        <Card.Header>
                            <h4>Current Date</h4>
                        </Card.Header>
                        <FoodSelection food={this.props.food} addFoodToDate={''} random='true' />
                        <Card.Footer>
                            <button onClick={()=>this.handleFoodDate()}>Save date to profile</button>
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
                return <h4> Select a place to eat and something to do from below</h4>
            }else{
                return <div>
                    <Card>
                        <Card.Header>
                            <h4>Current Date</h4>
                        </Card.Header>
                        {!Array.isArray(this.props.food)? <FoodSelection food={this.props.food} addFoodToDate='' random = 'true'/>: ''}
                        {!Array.isArray(this.props.activity)? <ActivitySelection activity={this.props.activity} addActivityToDate={''} random='true'/> : ''}
                        <Card.Footer>
                            <button onClick={()=>this.handleFoodActivityDate()}>Save date to profile</button>
                        </Card.Footer>
                    </Card>
                <br></br>
                <br></br>
                </div>
            }
            default:
                return <div>
                    <h4>Select a place to eat from below</h4>
                </div>
        }
    }

    render(){
        return <div>{this.renderCurrentDate()}</div>
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
        user: state.authReducer.currentUser
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrentDate))