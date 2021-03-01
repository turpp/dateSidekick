import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import ActivitySelection from '../datePresentation/ActivitySelection'
import FoodSelection from '../datePresentation/FoodSelection'
import Food from './Food'
import FoodActivity from './FoodActivity'
import {CardDeck} from 'react-bootstrap'
// import CardDeck from 'react-bootstrap/CardDeck'

//when I come back make random work
//decided that I am going to use the same food and foodActivity
//only difference is that I will pass a props random
//in my render food and activity I will check for random and have a fucntion that will pick one at random

export default class Random extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        foodResults: ['test food'],
        activityResults: ['test actvity'],
        renderDate: false

    }

//remvoing stuff now



    addFoodToDate=(event)=>{
        // debugger
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
        this.setState({
            zipcode: event.target.value
        })
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

        {/* {this.state.dateType=='food'? this.renderFoodSelction(): '' }
        {this.state.dateType=='food-activity'? this.renderFoodAndActivty(): ''} */}

        {this.state.dateType=='food'? <Food zipcode={this.state.zipcode} type='food' random='true'/>: '' }
        {this.state.dateType=='food-activity'? <FoodActivity zipcode={this.state.zipcode} type='food-activity' random={'true'} />: ''}


{/* <Food zipcode={this.state.zipcode} type='food'/>: '' }
<FoodActivity zipcode={this.state.zipcode} type='food-activity' />: ''} */}
        
    </div>

    }

    handleSubmit=(event)=>{
        event.preventDefault()
        
        if(this.state.dateType !== ''){
        this.setState({
            renderDate: true
        })
    }else{
        this.setState({
            renderDate: false
        })
        
    }

    }

    render(){
        return <div>
            <DateTemplates handleClick={this.handleClick}/>
            <form onSubmit={this.handleSubmit}>
                <label>Zipcode:</label>
                <input type='number' value={this.state.zipcode} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
            <CardDeck>
            {this.state.renderDate ? this.renderRandomDate():'Please select a date template and enter zipcode'}
            </CardDeck>
        </div>
        
    }
}