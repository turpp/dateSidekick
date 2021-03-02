import React from 'react'
import FoodSelection from './FoodSelection'
import ActivitySelection from './ActivitySelection'
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
        switch(this.props.type){
            case('food'):
            // debugger
            if(!Array.isArray(this.props.food)){
                return <div>
                    <Card>
                    <Card.Header>
                    <h4>Current Date</h4>
                    </Card.Header>
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
            case('food-activity'):

            if(Array.isArray(this.props.food)&&(Array.isArray(this.props.activity))){
                return <h4> Select a place to eat and something to do from below</h4>
            }else{
                // debugger
                return <div>
                    <Card>
                    <Card.Header>
                    <h4>Current Date</h4>
                    </Card.Header>
                    
                    {!Array.isArray(this.props.food)? <FoodSelection food={this.props.food} addFoodToDate='' random = 'true'/>: ''}
                    {!Array.isArray(this.props.activity)? <ActivitySelection activity={this.props.activity} addActivityToDate={''} random='true'/> : ''}
                    
                    <Card.Footer>
                        <button onClick={()=>this.handleClick()}>Save date to profile</button>
                    </Card.Footer>

                    </Card>
                    <br></br>
                    <br></br>

                </div>
            }










                // if(!Array.isArray(this.props.food)&&(!Array.isArray(this.props.activity))){
                // return<div>
                //     <Card>
                //         <h4>Current Date</h4>
                //         <FoodSelection food={this.props.food} addFoodToDate='' random = 'true'/>
                //         <ActivitySelection activity={this.props.activity} addActivityToDate={''} random='true'/> 
                //     <Card.Footer>
                //     <button onClick={()=>this.handleClick()}>Save date to profile</button>

                //     </Card.Footer>
                //     </Card>
                //     <br></br>
                //     <br></br>

                // </div>
                // }else{
                //     return <h4> Select a place to eat and something to do from below</h4>
                // }

            default:
                return <div>
                    <h4>Select a place to eat from below</h4>
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
        saveDate: (date,user,history)=>{dispatch(saveDate(date,user, history))}
    }
}

const mapStateToProps = (state)=>{

    return {
        user: state.authReducer.currentUser
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CurrentDate))