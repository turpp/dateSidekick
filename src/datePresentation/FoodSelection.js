import React from 'react'

function FoodSelection(props){
    return <div>
        <img src="imgurl"/>
        <h3>Food Name</h3>
        <h6>Price</h6>
        <p>Address</p>
        <p>Phone Number</p>
        <ul>
            <li>Categories</li>
        </ul>
        <button value={props.result} onClick={(event)=>props.addFoodToDate(event)}>Add To Date</button>
    </div>
}

export default FoodSelection