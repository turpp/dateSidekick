import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'
import ActivitySelection from '../datePresentation/ActivitySelection'



export default class FoodActivity extends React.Component{
    state={
        search: '', 
        foodResults: ['test'],
        activityResults: ['test activity'],
        zipcode: 72923,
        dateFood: {},
        dateActivity:{}
    }

    renderFoodSelction=()=>{
        return this.state.foodResults.map(result=>{
            return <FoodSelection result={result} addFoodToDate={this.addFoodToDate}/>
        })

    }

    renderActivitySelection=()=>{
        return this.state.activityResults.map(result=>{
            return <ActivitySelection result={result} addActivityToDate={this.addActivityToDate}/>
        })
    }

    addFoodToDate=(event)=>{
        debugger
        this.setState({
            dateFood: event.target.value
        })
    }

    addActivityToDate=(event)=>{
        this.setState({
            dateActivity: event.target.value
        })
    }


    render(){
        return <div>
            {this.renderFoodSelction()}
            {this.renderActivitySelection()}
            {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
        </div>
    }
}