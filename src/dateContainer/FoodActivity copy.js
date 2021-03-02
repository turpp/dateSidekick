import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'
import ActivitySelection from '../datePresentation/ActivitySelection'
import CardDeck from 'react-bootstrap/CardDeck'
import CurrentDate from '../datePresentation/CurrentDate'




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
                return <FoodSelection food={randomFood} addFoodToDate={this.addFoodToDate} random='true'/>

            }else{
        return this.state.foodResults.map(result=>{
            return <FoodSelection food={result} addFoodToDate={this.addFoodToDate} random='false'/>
        })
    } 
}

    }

    renderActivitySelection=()=>{
        if(this.state.activityResults.length >0){
            if(this.props.random=='true'){
                let randomActivity = this.state.activityResults[Math.floor(Math.random() * this.state.activityResults.length)]
                return <ActivitySelection activity={randomActivity} addActivityToDate={this.addActivityToDate} random='true'/>
            }else{
        return this.state.activityResults.map(result=>{
            return <ActivitySelection activity={result} addActivityToDate={this.addActivityToDate} random='false'/>
        })
    }
}
    }
    

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



    componentDidMount(){
        // fetch(`http://localhost:3000/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            // console.log(json)
            fetch(`https://gentle-inlet-80267.herokuapp.com/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{

            this.setState({
                foodResults: json.food.businesses,
                activityResults: json.activity.businesses
            })           
        })

    }
    render(){
        return <div>
            <CurrentDate food={this.state.dateFood}/>
            <h4>Food offerings</h4>
            <CardDeck>
            {this.renderFoodSelction()}
            </CardDeck>
            <p>===========================================</p>
            <h4>Activity offerings</h4>
            <CardDeck>
            {this.renderActivitySelection()}
            </CardDeck>
            {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
        </div>
    }
}