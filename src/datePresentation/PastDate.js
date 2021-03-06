import React from 'react'
import FoodSelection from './FoodSelection'
import ActivitySelection from './ActivitySelection'
import {Card,Container, Row,Button} from 'react-bootstrap'
import {deleteDate} from '../redux/actions/authActions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

 class PastDate extends React.Component{

    renderPastDate=()=>{
        switch(this.props.type){
            case('food'):
                return <div>
                    <Card>
                        <Card.Header>
                            <h4>Date</h4>
                        </Card.Header>
                        <FoodSelection food={this.props.date.activities[0]} addFoodToDate={''} random='true' />
                        <Card.Footer>
                            <Button variant='info' onClick={()=>'this.handleFoodDate()'}>View Date</Button>
                            <Button variant='danger' onClick={()=>this.props.deleteDate(this.props.date, this.props.history)}>Delete Date</Button>
                        </Card.Footer>
                    </Card>
                <br></br>
                <br></br>
                </div>
            case('food-activity'):
                return <div>
                    <Card>
                        <Card.Header>
                            <h4>Date</h4>
                        </Card.Header>
                        <Container>
                            <Row>

                        <FoodSelection food={this.props.date.activities[0]} addFoodToDate='' random = 'true'/>
                        <ActivitySelection activity={this.props.date.activities[1]} addActivityToDate={''} random='true'/>
                        </Row>
                        </Container>

                        <Card.Footer>
                            <Button variant='info' onClick={()=>'this.handleFoodActivityDate()'}>View Date</Button>
                            <Button variant='danger' onClick={()=>this.props.deleteDate(this.props.date, this.props.history)}>Delete Date</Button>
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
        return <div>{this.renderPastDate()}</div>
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteDate: (date, history)=>{dispatch(deleteDate(date, history))}
    }
}

export default withRouter(connect(null,mapDispatchToProps)(PastDate))
