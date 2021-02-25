import React from 'react'

class FoodSelection extends React.Component {
    
    renderCategories=()=>{
        return this.props.food.categories.map(c=>{
            return <li>{c.title}</li>
        })
    }
    render(){
        // debugger
    return <div>
        <img src={this.props.food.image_url} width='300px' height='300px'/>
        <h3>{this.props.food.name}</h3>
        <h6>{this.props.food.price}</h6>
        <p>{this.props.food.location.display_address}</p>
        <p>{this.props.food.display_phone}</p>
        <h4>Categories</h4>
        <ul>
            {this.renderCategories()}
        </ul>
        <button value={this.props.food.result} onClick={(event)=>this.props.addFoodToDate(event)}>Add To Date</button>
        <br></br>
        <br></br>
        <br></br>
    </div>
}
}

export default FoodSelection