import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import Food from './Food'
import Activity from './Activity'
import CurrentDate from '../datePresentation/CurrentDate'


export default class Custom extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        renderFood: false,
        renderActivity: false,
        dateFood:[],
        dateActivity: []
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.id,
            renderFood: false,
            renderActivity: false,
            dateFood:[],
            dateActivity: []
        })
    }

    handleChange=(event)=>{
        let prevState=this.state.zipcode
        if(event.target.value !== 5){
            this.setState({
                renderFood: false,
                renderActivity: false,
                zipcode: event.target.value
            })
        } else{
            this.setState({
                zipcode: event.target.value
            })
        }
    }


    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.dateType  && this.state.zipcode !== ''){
            switch(this.state.dateType){
                case 'food':
                this.setState({
                    renderFood: true,
                    renderActivity: false
                })
                break
                case 'food-activity':
                    this.setState({
                        renderActivity: true,
                        renderFood: true
                    })
                break
                default:
                    this.setState({
                        renderFood: false,
                        renderActivity: false
                    })
            }
        }
    }

    renderTemplate=()=>{
        return <DateTemplates handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipcode={this.state.zipcode}/>
    }
    
    renderChoices=()=>{
        switch(true){
            case(this.state.renderFood && this.state.renderActivity):
               return <div>
                    <CurrentDate food={this.state.dateFood} activity={this.state.dateActivity} type='food-activity'/>
                    <Food zipcode={this.state.zipcode} type='food' random='false' addFoodToDate={this.addFoodToDate}/>
                    <Activity zipcode={this.state.zipcode} type='food-activity' random='false' addActivityToDate={this.addActivityToDate}/>
                </div>
            case (!this.state.renderActivity && this.state.renderFood):
                return <div>
                    <CurrentDate food={this.state.dateFood} activity={this.state.dateActivity} type='food'/>
                    <Food zipcode={this.state.zipcode} type='food' random='false' addFoodToDate={this.addFoodToDate}/>
                </div>
            default: 
             return <p>Select date type and enter 5 digit zipcode</p>
        }
    }

    addFoodToDate=(food)=>{
        this.setState({
            dateFood: food
        })
    }

    addActivityToDate=(activity)=>{
        this.setState({
            dateActivity: activity
        })
    }

    render(){
        return <div>
            {this.renderTemplate()}
            {this.renderChoices()}
        </div>
    }
}