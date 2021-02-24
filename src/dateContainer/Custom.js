import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import Food from './Food'
import FoodActivity from './FoodActivity'


export default class Custom extends React.Component{
    state={
        dateType: '',
        zipcode: ''
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.id
        })
    }

    handleChange=(event)=>{
        this.setState({
            zipcode: event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        switch(this.state.dateType){
            case 'food':
                return <Food/>
            case 'food-activity':
                return <FoodActivity/>
            default:
                return <DateTemplates handleClick={this.handleClick}/>
        }

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
            <form onSubmit={this.handleSubmit}>
                <label>Zipcode:</label>
                <input type='number' value={this.state.zipcode} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
            
            </div>
        // return <p>Hi</p>

        //can put a if statement to render the buttons and also zipcode and once both submit render the swtich statement
    }
}