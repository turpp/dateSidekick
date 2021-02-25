import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'


export default class Food extends React.Component{

    state={
        search: '', 
        results: [],
        // zipcode: 72923,
        dateFood: {}
    }

    renderFoodSelction=()=>{
        if(this.state.results.length >0){
        return this.state.results.map(result=>{
            // debugger
            return <FoodSelection food={result} addFoodToDate={this.addFoodToDate}/>
        })
    }else{
        <p>loading...</p>
    }
    }

    addFoodToDate=(event)=>{
        // debugger
        this.setState({
            dateFood: event.target.value
        })
    }
    componentDidMount(){
        // debugger
        // const access_token = "98NIBCJIciAPgPo1Qdn558i-1lKmM3j1FTAaVfauX3cYvhZPJVDRi63_WIMwKe2ojqsSqSqxkFg3Jf2t8Va52w1lemMFauj51kftEd582ZklUgEroI2SqQyRLVQ1YHYx";

        // let myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer " + access_token);
        
        // fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=bars&limit=50&location=New York", {
        //   headers: myHeaders 
        // }).then((res) => {
        //   return res.json();
        // }).then((json) => {
        //   console.log(json);
        // });

        // debugger
        fetch(`http://localhost:3000/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            console.log(json)
            this.setState({
                results: json.businesses
            })
            // debugger
           
        })








        // fetch('https://crossorigin.me/https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972m/search?q=GET+https%3A%2F%2Fapi.yelp.com%2Fv3%2Fautocomplete%3Ftext%3Ddel%26latitude%3D37.786882%26longitude%3D-122.399972&rlz=1C5CHFA_enUS914US914&oq=GET+https%3A%2F%2Fapi.yelp.com%2Fv3%2Fautocomplete%3Ftext%3Ddel%26latitude%3D37.786882%26longitude%3D-122.399972&aqs=chrome..69i57.2375j0j7&sourceid=chrome&ie=UTF-8', {
        //     headers: {
        //         Origin: 'https://localhost:3000',
        //         Authorization: 'Bearer 98NIBCJIciAPgPo1Qdn558i-1lKmM3j1FTAaVfauX3cYvhZPJVDRi63_WIMwKe2ojqsSqSqxkFg3Jf2t8Va52w1lemMFauj51kftEd582ZklUgEroI2SqQyRLVQ1YHYx'
        //     }
        // }).then(resp=> resp.json()).then(json=>{
        //     console.log(json)
        // })
    }

    render(){
        // debugger
        return <div>
            {this.renderFoodSelction()}
            {/* <FoodSelection addFoodToDate={this.addFoodToDate} result={this.state.results[0]}/> */}
        </div>
    }
}