import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import ActivitySelection from '../datePresentation/ActivitySelection'
import FoodSelection from '../datePresentation/FoodSelection'



export default class Random extends React.Component{
    state={
        dateType: '',
        dateFood: '',
        dateActivity: '',
        zipcode: ''
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




    renderTemplate=()=>{
        switch(this.state.dateType){
            case 'food':
                return <FoodSelection/>
            case 'food-activity':
                return <ActivitySelection/>
            default:
                return <DateTemplates handleClick={this.handleClick}/>
        }
    }


    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Zipcode:</label>
                <input type='number' value={this.state.zipcode} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
        </div>
    }
}