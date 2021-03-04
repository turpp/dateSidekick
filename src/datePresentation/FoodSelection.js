import React from 'react'
import {Card,Button} from 'react-bootstrap'

class FoodSelection extends React.Component {
    
    renderCategories=()=>{
        return this.props.food.categories.map(c=>{
            return <li>{c.title}</li>
        })
    }

    render(){
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
                    {this.props.random ==='false' ? <Button variant='primary' value={this.props.food} onClick={()=>this.props.addFoodToDate(this.props.food)}>Add To Date</Button> : ''}
                    <a href={this.props.food.url} target='_blank'><Button variant='secondary'>Check out on Yelp!</Button></a>
                </Card.Body>
            </Card>
        </div>
    }
}

export default FoodSelection