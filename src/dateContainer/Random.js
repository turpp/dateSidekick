import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import ActivitySelection from '../datePresentation/ActivitySelection'
import FoodSelection from '../datePresentation/FoodSelection'
import Food from './Food'
import Activity from './Activity'
import {CardDeck} from 'react-bootstrap'

export default class Random extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        foodResults: ['test food'],
        activityResults: ['test actvity'],
        renderDate: false
    }

    addFoodToDate=(event)=>{
        this.setState({
            dateFood: event.target.value
        })
    }

    addActivityToDate=(event)=>{
        this.setState({
            dateActivity: event.target.value
        })
    }

    handleChange=(event)=>{
        let prevState=this.state.zipcode
        
        if(event.target.value !== 5){
            this.setState({
                renderDate: false,
                zipcode: event.target.value
            })
        } else{
            this.setState({
                zipcode: event.target.value
            })
        }
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.id,
            renderDate: false
        })
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

    renderFoodAndActivty=()=>{
        return <div>
            {this.renderFoodSelction()}
            {this.renderActivitySelection()}
        </div>
    }
    renderRandomDate=()=>{
        return <div>
            {this.state.dateType=='food'? <Food zipcode={this.state.zipcode} type='food'  random='true'/>: '' }
            {this.state.dateType=='food-activity'? <div><Food zipcode={this.state.zipcode} type='food'  random='true'/><Activity zipcode={this.state.zipcode} type='food-activity' random={'true'} /></div>: ''}        
        </div>
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if((this.state.dateType !== '') && (this.state.zipcode.length == 5)){
            this.setState({
                renderDate: true,
            })
        }else{
            this.setState({
                renderDate: false
            })
        }
    }

    render(){
        return <div>
            <DateTemplates handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipcode={this.state.zipcode}/>  
            <CardDeck>
                {this.state.renderDate ? this.renderRandomDate():'Please select a date template and enter zipcode'}
            </CardDeck>
        </div>
    }
}