import React from 'react'

function DateTemplates(props){
    // console.log(props)
    return <div>
        
        <button id='food' onClick={props.handleClick}>Food only</button>
        <button id='food-activity' onClick={props.handleClick}>Food and Activity</button>
        <form onSubmit={props.handleSubmit}>
                <label>Zipcode:</label>
                <input type='number' value={props.zipcode} onChange={props.handleChange}/>
                {/* <input type='number' name='zipcode'/> */}
                <input type='submit'/>
                
            </form>

    </div>
}

export default DateTemplates