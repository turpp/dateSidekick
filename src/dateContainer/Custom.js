import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import Food from './Food'
import FoodActivity from './FoodActivity'


export default class Custom extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        renderFood: false,
        renderFoodActivity: false
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
        // debugger
        if(this.state.dateType  && this.state.zipcode !== ''){
        switch(this.state.dateType){
            case 'food':
               this.setState({
                   renderFood: true,
                   renderFoodActivity: false
               })
               break
            case 'food-activity':
                this.setState({
                    renderFoodActivity: true,
                    renderFood: false
                })
                break
            default:
                // return <DateTemplates handleClick={this.handleClick}/>
        }
    }
    }

    renderTemplate=()=>{

    //     if(this.state.dateType  && this.state.zipcode !== ''){
    //     switch(this.state.dateType){
    //         case 'food':
    //             return <Food/>
    //         case 'food-activity':
    //             return <FoodActivity/>
    //         default:
    //     }
    // } else{
    //     return <DateTemplates handleClick={this.handleClick}/>
    // }
    // }
        return <DateTemplates handleClick={this.handleClick}/>
    }

    

    render
    render(){
        return <div>
            {this.renderTemplate()}
            <form onSubmit={this.handleSubmit}>
                <label>Zipcode:</label>
                <input type='number' value={this.state.zipcode} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
            {this.state.renderFood == true ? <Food zipcode={this.state.zipcode} type='food'/>: '' }
            {this.state.renderFoodActivity == true ? <FoodActivity zipcode={this.state.zipcode} type='food-activity' />: ''}
            </div>

        //can put a if statement to render the buttons and also zipcode and once both submit render the swtich statement
    }
}