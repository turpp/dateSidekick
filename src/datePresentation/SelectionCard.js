import React from 'react'
import {Card,Button} from 'react-bootstrap'


class SelectionCard extends React.Component{
    renderCategories=()=>{
        return this.props.activity.categories.map(c=>{
            return <li key={c.title}>{c.title}</li>
        })
    }

    render(){
        return (
            <Card style={{ width: '20rem', margin: '1em'}} className="shadow-sm p-3 mb-5 bg-body rounded">
                <Card.Img className="border border-dark rounded" variant='top' src={this.props.activity.image_url} width='200' height='200'/>
                <Card.Body>
                    <Card.Title><h5>{this.props.activity.name}</h5></Card.Title>
                        <h6>{this.props.activity.price}</h6>
                        <p>{this.props.activity.location.display_address[0]}<br></br>{this.props.activity.location.display_address[1]}</p>
                        <p>{this.props.activity.display_phone}</p>
                        <h6><u>Categories</u></h6>
                        <ul>
                            {this.renderCategories()}
                        </ul>
                    {this.props.random ==='false' ? <Button variant='primary' value={this.props.activity} onClick={()=>this.props.addActivityToDate(this.props.activity)}>Add To Date</Button>: ''}
                    <a href={this.props.activity.url} target='_blank' rel="noreferrer"><Button variant='secondary'>Check out on Yelp!</Button></a>
                </Card.Body>
            </Card>
        )
    }
}

export default SelectionCard
