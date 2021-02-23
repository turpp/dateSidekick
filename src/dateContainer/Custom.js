import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import Food from './Food'
import FoodActivity from './FoodActivity'


export default class Custom extends React.Component{
    state={
        dateType: ''
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.id
        })
    }

    renderTemplate=()=>{
        switch(this.state.dateType){
            case 'food':
                return <Food/>
            case 'food-activity':
                return <FoodActivity/>
            default:
                return <DateTemplates handleClick={this.handleClick}/>
        }
    }
    render(){
        return <div>
            {this.renderTemplate()}
            </div>
        // return <p>Hi</p>
    }
}