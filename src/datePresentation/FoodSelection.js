import React from 'react'
import {Card,Button} from 'react-bootstrap'

class FoodSelection extends React.Component {
    
    renderCategories=()=>{
        return this.props.food.categories.map(c=>{
            return <li>{c.title}</li>
        })
    }
    render(){
        // debugger



        // return <div>
        // <img src={this.props.food.image_url} width='300px' height='300px'/>
        // <h3>{this.props.food.name}</h3>
        
        // <h6>{this.props.food.price}</h6>
        // <p>{this.props.food.location.display_address}</p>
        // <p>{this.props.food.display_phone}</p>
        // <h4>Categories</h4>
        // <ul>
        //     {this.renderCategories()}
        // </ul>
        
        // <button  value={this.props.food.result} onClick={(event)=>this.props.addFoodToDate(event)}>Add To Date</button>
        // <br></br>
        // <br></br>
        // <br></br>
        // </div>










    return <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={this.props.food.image_url} width='300px' height='300px'/>
        <Card.Body>
        <Card.Title><h3>{this.props.food.name}</h3></Card.Title>
        <Card.Text>
        <h6>{this.props.food.price}</h6>
        <p>{this.props.food.location.display_address}</p>
        <p>{this.props.food.display_phone}</p>
        <h4>Categories</h4>
        <ul>
            {this.renderCategories()}
        </ul>
        </Card.Text>
        <Button variant='primary' value={this.props.food.result} onClick={(event)=>this.props.addFoodToDate(event)}>Add To Date</Button>
        <a href={this.props.food.url} target='_blank'><Button variant='secondary'>Check out on Yelp!</Button></a>
        {/* <Button variant='secondary'  onClick={()=>window.open(this.props.food.url)}>Check out on Yelp!</Button> */}

        </Card.Body>
        </Card>

        </div>
}
}

export default FoodSelection