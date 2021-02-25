import React from 'react'

class ActivitySelection extends React.Component{
    renderCategories=()=>{
        return this.props.activity.categories.map(c=>{
            return <li>{c.title}</li>
        })
    }

    render(){
        // debugger
        return <div>
        <img src={this.props.activity.image_url} width='300px' height='300px'/>
        <h3>{this.props.activity.name}</h3>
        <h6>{this.props.activity.price}</h6>
        <p>{this.props.activity.location.display_address}</p>
        <p>{this.props.activity.display_phone}</p>
        <h4>Categories</h4>
        <ul>
            {this.renderCategories()}
        </ul>
        <button value={this.props.activity.result} onClick={(event)=>this.props.addFoodToDate(event)}>Add To Date</button>
        <br></br>
        <br></br>
        <br></br>
    </div>
    }
}

export default ActivitySelection