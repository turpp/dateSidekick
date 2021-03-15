import React from 'react'
import {Card,Button,Carousel, ListGroup} from 'react-bootstrap'

class FoodSelection extends React.Component {
    
    renderCategories=()=>{
        return this.props.food.categories.map(c=>{
            return <li key={c.title}>{c.title}</li>
        })
    }

    render(){
        return (
            <Card style={{ width: '20rem' }} className="shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Img className="border border-dark rounded" variant='top' src={this.props.food.image_url} width='200px' height='200px'/>
                <Card.Body>
                    <Card.Title><h5>{this.props.food.name}</h5></Card.Title>
                        <h6>{this.props.food.price}</h6>
                        <p>{this.props.food.location.display_address[0]}<br></br>{this.props.food.location.display_address[1]}</p>
                        <p>{this.props.food.display_phone}</p>
                        <h6><u>Categories</u></h6>
                        <ul>
                            {this.renderCategories()}
                        </ul>
                    
                    {this.props.random ==='false' ? <Button variant='primary' value={this.props.food} onClick={()=>this.props.addFoodToDate(this.props.food)}>Add To Date</Button> : ''}
                    <a href={this.props.food.url} target='_blank'><Button variant='secondary'>Check out on Yelp!</Button></a>
                </Card.Body>
            </Card> 
           
        )
    }
}

export default FoodSelection