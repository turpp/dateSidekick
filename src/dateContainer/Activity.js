import React from 'react'
import ActivitySelection from '../datePresentation/ActivitySelection'
import CardDeck from 'react-bootstrap/CardDeck'
import CurrentDate from '../datePresentation/CurrentDate'




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
                return <ActivitySelection activity={randomActivity} addActivityToDate={this.addActivityToDate} random='true'/>
            }else{
        return this.state.activityResults.map(result=>{
            return <ActivitySelection activity={result} addActivityToDate={this.addActivityToDate} random='false'/>
        })
    }
}
    }
    


    addActivityToDate=(activity)=>{
        this.setState({
            dateActivity: activity
        })
    }



    componentDidMount(){
        fetch(`http://localhost:3000/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            // console.log(json)
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
            {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
        </div>
    }
}