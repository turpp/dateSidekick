import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'


export default class Food extends React.Component{

    state={
        search: '', 
        results: ['test'],
        zipcode: 72923,
        dateFood: {}
    }

    renderFoodSelction=()=>{
        return this.state.results.map(result=>{
            return <FoodSelection result={result} addFoodToDate={this.addFoodToDate}/>
        })

    }

    addFoodToDate=(event)=>{
        debugger
        this.setState({
            dateFood: event.target.value
        })
    }
    // componentDidMount(){
    //     fetch('https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972m/search?q=GET+https%3A%2F%2Fapi.yelp.com%2Fv3%2Fautocomplete%3Ftext%3Ddel%26latitude%3D37.786882%26longitude%3D-122.399972&rlz=1C5CHFA_enUS914US914&oq=GET+https%3A%2F%2Fapi.yelp.com%2Fv3%2Fautocomplete%3Ftext%3Ddel%26latitude%3D37.786882%26longitude%3D-122.399972&aqs=chrome..69i57.2375j0j7&sourceid=chrome&ie=UTF-8', {
    //         headers: {
    //             "Access-Control-Allow-Origin" : true,

    //             Authorization: 'Bearer 98NIBCJIciAPgPo1Qdn558i-1lKmM3j1FTAaVfauX3cYvhZPJVDRi63_WIMwKe2ojqsSqSqxkFg3Jf2t8Va52w1lemMFauj51kftEd582ZklUgEroI2SqQyRLVQ1YHYx'
    //         }
    //     }).then(resp=> resp.json()).then(json=>{
    //         console.log(json)
    //     })
    // }

    render(){
        return <div>
            {this.renderFoodSelction()}
            {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
        </div>
    }
}