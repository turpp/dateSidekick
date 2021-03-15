import React from 'react'
import FoodSelection from './FoodSelection'
import ActivitySelection from './ActivitySelection'
import {Card,Container, Row,Button} from 'react-bootstrap'
import {deleteDate, editDate} from '../redux/actions/dateActions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import EditDateModal from './EditDateModal'
import '../App'

 class PastDate extends React.Component{

    state={
        show: false,
        notes: this.props.date.notes,
        date: this.props.date.date
    }

    handleClose= ()=>{
        this.setState({
            show:false
        })
    }

    handleShow=()=>{
        this.setState({
            show: true
        })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    renderPrettyDate=()=>{
        let dateObj = new Date(this.props.date.date)
        return dateObj.toDateString()
    }



    renderPastDate=()=>{
        switch(this.props.type){
            case('food'):
                return <div>
                    <Card>
                        <Card.Body>
                            <FoodSelection food={this.props.date.activities[0]} addFoodToDate={''} random='true' />
                            <h5 style={{textAlign: 'left'}}>When: <br></br>{!!this.props.date.date ? this.renderPrettyDate(): ' Add me!'}</h5>
                            <h5 style={{textAlign: 'left'}}>Notes:<br></br>{!!this.props.date.notes ? this.props.date.notes: '- Tell me about it?!?!?'}</h5>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info" onClick={this.handleShow}>Edit Date</Button>
                            <Button variant='danger' onClick={()=>this.props.deleteDate(this.props.date, this.props.history)}>Delete Date</Button>
                        </Card.Footer>
                    </Card>
                <br></br>
                <br></br>

                <EditDateModal show={this.state.show} onHide={this.handleClose} notes={this.state.notes} date={this.state.date} onChange={this.handleChange} save={()=>this.props.editDate(this.props.date, this.state.notes, this.state.date)} handleClose={this.handleClose}/>
                </div>
            case('food-activity'):
                return <div>
                    <Card>
                        <Container>
                            <Row>
                                <FoodSelection food={this.props.date.activities[0]} addFoodToDate='' random = 'true'/>
                                <ActivitySelection activity={this.props.date.activities[1]} addActivityToDate={''} random='true'/>
                                </Row>
                        </Container>
                        <h5 style={{textAlign: 'left'}}>When: <br></br>{!!this.props.date.date ? this.renderPrettyDate(): 'Add me!'}</h5>
                        <h5 style={{textAlign: 'left'}}>Notes:<br></br>{!!this.props.date.notes ? this.props.date.notes: '- Tell me about it?!?!?'}</h5>
                        <Card.Footer>
                            <Button variant="info" onClick={this.handleShow}>Edit Date</Button>
                            <Button variant='danger' onClick={()=>this.props.deleteDate(this.props.date, this.props.history)}>Delete Date</Button>
                        </Card.Footer>
                    </Card>
                <br></br>
                <br></br>
                <EditDateModal show={this.state.show} onHide={this.handleClose} notes={this.state.notes} date={this.state.date} onChange={this.handleChange} save={()=>this.props.editDate(this.props.date, this.state.notes, this.state.date)} handleClose={this.handleClose}/>
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
        deleteDate: (date, history)=>{dispatch(deleteDate(date, history))},
        editDate: (outing, notes, date)=>{dispatch(editDate(outing, notes, date))}
    }
}

export default withRouter(connect(null,mapDispatchToProps)(PastDate))
