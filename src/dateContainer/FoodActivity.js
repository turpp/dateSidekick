import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'
import ActivitySelection from '../datePresentation/ActivitySelection'



export default class FoodActivity extends React.Component{
    state={
        search: '', 
        foodResults: [],
        activityResults: [],
        dateFood: {},
        dateActivity:{}
    }

    renderFoodSelction=()=>{
        if(this.state.foodResults.length>0){
            if(this.props.random=='true'){
                let randomFood = this.state.foodResults[Math.floor(Math.random() * this.state.foodResults.length)]
                return <FoodSelection food={randomFood} addFoodToDate={this.addFoodToDate}/>

            }else{
        return this.state.foodResults.map(result=>{
            return <FoodSelection food={result} addFoodToDate={this.addFoodToDate}/>
        })
    } 
}

    }

    renderActivitySelection=()=>{
        if(this.state.activityResults.length >0){
            if(this.props.random=='true'){
                let randomActivity = this.state.activityResults[Math.floor(Math.random() * this.state.activityResults.length)]
                return <ActivitySelection activity={randomActivity} addActivityToDate={this.addActivityToDate}/>
            }else{
        return this.state.activityResults.map(result=>{
            return <ActivitySelection activity={result} addActivityToDate={this.addActivityToDate}/>
        })
    }
}
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



    componentDidMount(){
        fetch(`http://localhost:3000/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            console.log(json)
            this.setState({
                foodResults: json.food.businesses,
                activityResults: json.activity.businesses
            })           
        })

    }
    render(){
        return <div>
            {this.renderFoodSelction()}
            <p>===========================================</p>
            {this.renderActivitySelection()}
            {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
        </div>
    }
}