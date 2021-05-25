import React from 'react'
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap'
import {connect} from 'react-redux'
import PastDate from './PastDate'
import {fetchUrl} from '../url'
import LoaderWheel from '../datePresentation/LoaderWheel'
import SelectionCard from '../datePresentation/SelectionCard'

class Account extends React.Component{
    state={
        activities: [],
        dates: [],
        loading: true,
        showDates: false
    }
    componentDidMount(){
        fetch(`${fetchUrl()}/users/${this.props.user.id}`).then(resp=>resp.json()).then(json=>{
            let activities = []
            let outings =[]
            json.included.forEach(data=>{
                if(data.type==='activity'){
                    activities.push(data)
                } else {
                    outings.push(data)
                }
            })
            outings.sort(function(a,b){
                return b.attributes.id - a.attributes.id
            })
            this.setState({
                activities: activities,
                dates: outings,
                loading: false
            })
        })
    }

    showPastDate=()=>{
        let status = this.state.showDates
        this.setState({
            showDates: !status
        })
    }

    renderActivities=()=>{
        if(this.state.activities.length >0){
            return this.state.activities.map(activity =>{
                return <>
                <Col>
                <SelectionCard activity={activity.attributes} addActivityToDate={''} random='true' foodOnly={'past-food-date'}/>
                </Col>
                </>
            })
        }
    }

    renderDates=()=>{
        if(this.state.dates.length >0){
            return this.state.dates.map(date=>{
                if(date.attributes.activities.length === 1){
                    return <>
                            {/* <Row className="justify-content-md-center"> */}
                                <Col style={{padding: '0'}}>
                                <PastDate date={date.attributes} type='food'/>
                                </Col>
                            {/* </Row> */}
                        </>
                }else{
                    return <>
                            {/* <Row className="justify-content-md-center"> */}
                            <Col style={{padding: '0'}}>
                             
                                <PastDate date={date.attributes} type='food-activity'/>
                                </Col>
                            {/* </Row> */}
                        </> 
                }
            })
        }
    }
        render(){
            if(this.state.loading){
                return <LoaderWheel/>
            }
        return <Container fluid>
            <h1>Welcome {this.props.user.username}!</h1>
            {this.state.showDates ? <Button variant='primary' size='lg' onClick={this.showPastDate} style={{marginBottom: '1em'}}>Hide Dates!</Button> :<Button variant='primary' size='lg' onClick={this.showPastDate}>See Dates You Have Saved!</Button>}
            
            <Collapse in={this.state.showDates}>
                <div>
            <Row>
            {this.renderDates()}
            </Row>
            </div>
            </Collapse>
            <hr></hr>
            <h1>Wow! You have been to {this.state.activities.length} {this.state.activities.length === 1 ? 'place!': 'places!'}</h1>
             When you save a date, all the places you have been will show up below. Don't worry if you go to a place more than once. We will only show the place once. Now go out and explore!
                <br></br>
                <br></br>
                <Container>
                    <Row className="justify-content-md-center" lg={3} md={2} xs={1}>
                        {this.renderActivities()}
                    </Row>
                </Container>
            
        </Container>
        }
}

    const mapStateToProps =(state)=>{
        return {
            user: state.authReducer.currentUser
        }
    }

export default connect(mapStateToProps)(Account)