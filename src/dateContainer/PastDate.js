import React from 'react'
import {Card,Container, Row,Button, Col} from 'react-bootstrap'
import {deleteDate, editDate} from '../redux/actions/dateActions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import EditDateModal from '../datePresentation/EditDateModal'
import '../App'
import SelectionCard from '../datePresentation/SelectionCard'

 class PastDate extends React.Component{

    state={
        show: false,
        notes: this.props.date.notes,
        date: this.props.date.date,
        // likes: 0
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

    // handleLike=()=>{
    //     let likes=this.state.likes
    //     this.setState({
    //         likes: likes + 1
    //     })
    // }

    renderPrettyDate=()=>{
        let dateObj = new Date(this.props.date.date)
        return dateObj.toDateString()
    }



    renderPastDate=()=>{
        switch(this.props.type){
            case('food'):
                return <div>
                    <Card style={{backgroundColor: '#FFFACD', padding: '1em', margin: 'auto', width: '350px'}}>
                        <h2>Food Date</h2>
                        <Card.Body>
                            <SelectionCard activity={this.props.date.activities[0]} addActivityToDate={''} random='true' foodOnly={'past-food-date'} />
                            <h5 style={{textAlign: 'left'}}>When: <strong>{!!this.props.date.date ? this.renderPrettyDate(): ''}</strong></h5>
                            <hr></hr>
                            <h5 style={{textAlign: 'left'}}>Notes:<br></br>{!!this.props.date.notes ? this.props.date.notes: '- Tell me about it?!?!?'}</h5>
                        </Card.Body>
                        <Card.Footer>
                            {/* add a like button. On button have an event listner to change liked amount */}
                            {/* <Button variant='primary' onClick={this.handleLike}>Like me! {this.state.likes}</Button> */}
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
                    <Card className='past-food-activity' style={{backgroundColor: '#FFFACD', padding: '1em' ,margin: 'auto', minWidth: '700px', width: 'fit-content', maxWidth: '700px'}}>
                        <h2>Food and Activity Date</h2>
                        <Container>
                                <Row lg={2} xs={1} md={1}>
                                <SelectionCard activity={this.props.date.activities[0]} addActivityToDate='' random = 'true'/>
                                <SelectionCard activity={this.props.date.activities[1]} addActivityToDate={''} random='true'/>
                               </Row>
                        </Container>
                        <h5 style={{textAlign: 'left'}}>When: <strong>{!!this.props.date.date ? this.renderPrettyDate(): ''}</strong></h5>
                        <hr></hr>
                        <h5 style={{textAlign: 'left'}}>Notes:<br></br>{!!this.props.date.notes ? this.props.date.notes: '- Tell me about it?!?!?'}</h5>
                        <Card.Footer>
                        {/* <Button variant='primary' onClick={this.handleLike}>Like me! {this.state.likes}</Button> */}

                            <Button variant="info" onClick={this.handleShow} style={{margin: '1%'}}>Edit Date</Button>
                            <Button variant='danger' style={{margin: '1%'}} onClick={()=>this.props.deleteDate(this.props.date, this.props.history)}>Delete Date</Button>
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
