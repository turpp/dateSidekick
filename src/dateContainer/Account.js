import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {connect} from 'react-redux'
import ActivitySelection from '../datePresentation/ActivitySelection'
import PastDate from '../datePresentation/PastDate'
import {fetchUrl} from '../url'
import Loader from "react-loader-spinner";


class Account extends React.Component{
    state={
        activities: [],
        dates: [],
        loading: true
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
            // debugger
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

    renderActivities=()=>{
        if(this.state.activities.length >0){
            return this.state.activities.map(activity =>{
                return <ActivitySelection activity={activity.attributes} addActivityToDate={''} random='true'/>
            })
        }
    }

    renderDates=()=>{
        // this.state.dates.sort(function(a,b){
        //     debugger
        //     return a.attributes.date - b.attributes.date
        // })
        // debugger
        
        if(this.state.dates.length >0){
            return this.state.dates.map(date=>{
                if(date.attributes.activities.length == 1){
                    return <div>
                        <Container fluid>
                        <Row className="justify-content-md-center">

                        <PastDate date={date.attributes} type='food'/>
                        </Row>
                        </Container>
                        </div>
                }else{
                    return<div>
                            <Container fluid>
                        <Row className="justify-content-md-center">

                        <PastDate date={date.attributes} type='food-activity'/>
                        </Row>
                        </Container>

                    </div> 
                }
            })
        }
    }
        render(){
            if(this.state.loading){
                return <div className='App'>
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </div>
            }
        return <div>
            <h2>Welcome {this.props.user.username}, this is your Account</h2>
            <h4><u>Dates you have saved</u></h4>
            {this.renderDates()}

            <h4>All Food and Places you have saved</h4>
            <ul> Total places = {this.state.activities.length}
            <Container>
            <Row className="justify-content-md-center">
                    {this.renderActivities()}
                    </Row>
                    </Container>
            </ul>
        </div>
        }
    }

    const mapStateToProps =(state)=>{
        return {
            user: state.authReducer.currentUser
        }
}

export default connect(mapStateToProps)(Account)