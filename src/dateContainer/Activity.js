import React from 'react'
import ActivitySelection from '../datePresentation/ActivitySelection'
import CardDeck from 'react-bootstrap/CardDeck'
import CurrentDate from '../datePresentation/CurrentDate'
import {fetchUrl} from '../url'

export default class Activity extends React.Component{
    state={
        search: '', 
        activityResults: [],
        dateActivity:{}
    }

    renderActivitySelection=()=>{
        if(this.state.activityResults.length >0){
            if(this.props.random=='true'){
                let randomActivity = this.state.activityResults[Math.floor(Math.random() * this.state.activityResults.length)]
                return <ActivitySelection activity={randomActivity} addActivityToDate={this.props.addActivityToDate} random='true'/>
            }else{
                return this.state.activityResults.map(result=>{
                    return <ActivitySelection activity={result} addActivityToDate={this.props.addActivityToDate} random='false'/>
                })
            }
        }
    }

    componentDidMount(){
        fetch(`${fetchUrl()}/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            this.setState({
                activityResults: json.activity.businesses
            })           
        })
    }

    render(){
        return <div>
            <h4>Activity offerings</h4>
            <CardDeck>
                {this.renderActivitySelection()}
            </CardDeck>
        </div>
    }
}