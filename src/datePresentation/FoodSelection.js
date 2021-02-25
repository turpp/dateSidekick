import React from 'react'

class FoodSelection extends React.Component {
    
    render(){
        // debugger
    return <div>
        <img src={this.props.food.img_url}/>
        <h3>{this.props.food.name}</h3>
        <h6>{this.props.food.price}</h6>
        <p>{this.props.food.location.display_address}</p>
        <p>{this.props.food.display_phone}</p>
        <ul>
            <li>Categories</li>
        </ul>
        <button value={this.props.food.result} onClick={(event)=>this.props.addFoodToDate(event)}>Add To Date</button>
    </div>
}
}

export default FoodSelection