import React from 'react'
import FoodSelection from './FoodSelection'
import {Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import {saveDate} from '../redux/actions/authActions'
import {withRouter} from 'react-router-dom'


class CurrentDate extends React.Component{

    handleClick=(event)=>{
        // debugger
        this.props.saveDate(this.props.food, this.props.user, this.props.history)
    }
    renderCurrentDate=()=>{
        switch(false){
            case(!!this.props.activity):
            if(!!this.props.food.name){
                return <div>
                    <Card>
                    <h4>Current Date</h4>
                    <FoodSelection food={this.props.food} addFoodToDate={''} random='true' />
                    <Card.Footer>
                        <button onClick={()=>this.handleClick()}>Save date to profile</button>
                    </Card.Footer>
                    </Card>
                    
                    <br></br>
                    <br></br>
                    </div>
                    
            } else {
                return <h4>Select a place to eat from below</h4>
            }
            default:
                return <div>
                    <p>food activity</p>
                </div>

        }
    }

    render(){
        // debugger
        return <div>{this.renderCurrentDate()}</div>
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        saveDate: (date,history)=>{dispatch(saveDate(date, history))}
    }
}

const mapStateToProps = (state)=>{

    return {
        user: state.authReducer.currentUser
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrentDate))