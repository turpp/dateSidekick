import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'
import CardDeck from 'react-bootstrap/CardDeck'
import CurrentDate from '../datePresentation/CurrentDate'
import {fetchUrl} from '../url'

export default class Food extends React.Component{

    state={
        search: '', 
        results: [],
        dateFood: {}
    }

    renderFoodSelction=()=>{
        if(this.state.results.length >0){
            if(this.props.random=='true'){
                let randomFood = this.state.results[Math.floor(Math.random() * this.state.results.length)]
                return <FoodSelection food={randomFood} addFoodToDate={this.props.addFoodToDate} random='true'/>
            }else{
                return this.state.results.map(result=>{
                    return <FoodSelection food={result} addFoodToDate={this.props.addFoodToDate} random='false'/>
                })
            }
        }
    }

    componentDidMount(){
        fetch(`${fetchUrl()}/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            this.setState({
                results: json.businesses
            })           
        })
    }

    render(){
        return <div>
            <h4>Food offerings</h4>
            <CardDeck>
                {this.renderFoodSelction()}
            </CardDeck>
        </div>
    }
}