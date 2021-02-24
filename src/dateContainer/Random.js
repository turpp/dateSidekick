import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import ActivitySelection from '../datePresentation/ActivitySelection'
import FoodSelection from '../datePresentation/FoodSelection'



export default class Random extends React.Component{
    state={
        dateType: '',
        // dateFood: 'test Food',
        // dateActivity: 'test Activity',
        zipcode: '',
        foodResults: ['test food'],
        activityResults: ['test actvity'],
        renderDate: false

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
        {/* <FoodSelection result={result} addFoodToDate={this.addFoodToDate}/>
        <ActivitySelection result={result} addActivityToDate={this.addActivityToDate}/> */}
        </div>
    }
    renderRandomDate=()=>{
        return <div>
        {/* {this.renderFoodSelction()}
        {this.renderActivitySelection()} */}

        {this.state.dateType=='food'? this.renderFoodSelction(): '' }
        {this.state.dateType=='food-activity'? this.renderFoodAndActivty(): ''}

        
        {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
    </div>

    }

    handleSubmit=(event)=>{
        event.preventDefault()
        
          
        this.setState({
            renderDate: true
        })

    }

    render(){
        return <div>
            <DateTemplates handleClick={this.handleClick}/>
            <form onSubmit={this.handleSubmit}>
                <label>Zipcode:</label>
                <input type='number' value={this.state.zipcode} onChange={this.handleChange}/>
                <input type='submit'/>
            </form>
            {/* {this.state.dateType=='food'? this.renderFoodSelction(): '' }
            {this.state.dateType=='food-activity'? this.renderRandomDate(): ''} */}
            {this.state.renderDate ? this.renderRandomDate():''}
        </div>
        
    }
}