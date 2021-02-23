import React from 'react'

function DateTemplates(props){
    console.log(props)
    return <div>
        <button id='food' onClick={props.handleClick}>Food only</button>
        <button id='food-activity' onClick={props.handleClick}>Food and Activity</button>
    </div>
}

export default DateTemplates