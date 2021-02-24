import React from 'react'

function ActivitySelection(props){
    return <div>
        <img src="imgurl"/>
        <h3>Activity Name</h3>
        <h6>Price</h6>
        <p>Address</p>
        <p>Phone Number</p>
        <ul>
            <li>Categories</li>
        </ul>
        <button value={props.result} onClick={(event)=>props.addActivityToDate(event)}>Add To Date</button>
    </div>
}

export default ActivitySelection