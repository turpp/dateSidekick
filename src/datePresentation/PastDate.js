import React from 'react'
import FoodSelection from './FoodSelection'
import ActivitySelection from './ActivitySelection'
import {Card} from 'react-bootstrap'


export default class PastDate extends React.Component{



    renderPastDate=()=>{
        // debugger
        switch(this.props.type){
            case('food'):
            
                return <div>
                    <Card>
                    <Card.Header>
                    <h4>Date</h4>
                    </Card.Header>
                    <FoodSelection food={this.props.date.activities[0]} addFoodToDate={''} random='true' />
                    <Card.Footer>
                        <button onClick={()=>'this.handleFoodDate()'}>View Date</button>
                    </Card.Footer>
                    </Card>
                    
                    <br></br>
                    <br></br>
                    </div>
                    
            
            case('food-activity'):

           
                // debugger
                return <div>
                    <Card>
                    <Card.Header>
                    <h4>Date</h4>
                    </Card.Header>
                    
                    <FoodSelection food={this.props.date.activities[0]} addFoodToDate='' random = 'true'/>
                    <ActivitySelection activity={this.props.date.activities[1]} addActivityToDate={''} random='true'/>
                    
                    <Card.Footer>
                        <button onClick={()=>this.handleFoodActivityDate()}>Save date to profile</button>
                    </Card.Footer>

                    </Card>
                    <br></br>
                    <br></br>

                </div>
                default:
                    return <h6>Error</h6>

            }
        }


    render(){
        // debugger
        return <div>{this.renderPastDate()}</div>
    }



}
