import React from 'react'
import {Card,Button} from 'react-bootstrap'


class ActivitySelection extends React.Component{
    renderCategories=()=>{
        return this.props.activity.categories.map(c=>{
            return <li key={c.title}>{c.title}</li>
        })
    }

    render(){
        // debugger
        return (
            <Card style={{ width: '18rem' }} className="shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Img className="border border-dark rounded" variant='top' src={this.props.activity.image_url} width='250' height='250'/>
                <Card.Body>
                    <Card.Title><h3>{this.props.activity.name}</h3></Card.Title>
                    
                        <h6>{this.props.activity.price}</h6>
                        <p>{this.props.activity.location.display_address[0]}<br></br>{this.props.activity.location.display_address[1]}</p>
                        <p>{this.props.activity.display_phone}</p>
                        <h4>Categories</h4>
                        <ul>
                            {this.renderCategories()}
                        </ul>
                    
                    {this.props.random ==='false' ? <Button variant='primary' value={this.props.activity} onClick={()=>this.props.addActivityToDate(this.props.activity)}>Add To Date</Button>: ''}
                    <a href={this.props.activity.url} target='_blank'><Button variant='secondary'>Check out on Yelp!</Button></a>
                </Card.Body>
            </Card>
        )
    }
}

export default ActivitySelection