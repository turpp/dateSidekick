import React from 'react'
import {Card,Button, Collapse} from 'react-bootstrap'


class SelectionCard extends React.Component{

    state={
        open: false
    }

    renderCategories=()=>{
        return this.props.activity.categories.map(c=>{
            return <li key={c.title}>{c.title}</li>
        })
    }

    showMore= () =>{
        let status = this.state.open
        this.setState({
            open: !status
        })
    }

    renderCard = () =>{
    }

    render(){
    
        return (
            <Card style={{ width: '50%',margin: 'auto'}} className={`shadow-sm p-3 mb-5 bg-body rounded ${this.props.foodOnly}`} >
                <Card.Img variant='top' src={this.props.activity.image_url} style={{width: '95%', height: '300px', margin: 'auto', objectFit: 'contain'}}  onClick={this.showMore}/>
                <Card.Body>
                    <Card.Title><h5>{this.props.activity.name}</h5></Card.Title>
                    <Collapse in={this.state.open}>
                        <div>
                            
                        {!!this.props.activity.price?<h6>{this.props.activity.price}</h6>:''}
                        {!!this.props.activity.location.display_address[0]? <>{this.props.activity.location.display_address[0]}<br></br>{this.props.activity.location.display_address[1]}</>: ''}
                        <br></br>
                        {!!this.props.activity.display_phone ? <>{this.props.activity.display_phone}</>:''}
                        <br></br>
                        <br></br>
                        <h6><u>Categories</u></h6>

                        <ul>
                            {this.renderCategories()}
                        </ul>
                        </div>
                        </Collapse>
                    {this.props.random ==='false' ? <Button variant='primary' value={this.props.activity} onClick={()=>this.props.addActivityToDate(this.props.activity)}>Add To Date</Button>: ''}
                    <a href={this.props.activity.url} target='_blank' rel="noreferrer"><Button variant='secondary' >Check out on Yelp!</Button></a>
                    {this.state.open ? <Button onClick={this.showMore} variant='secondary'>Show Less</Button> : <Button onClick={this.showMore} variant='secondary'>Show More</Button>}
                </Card.Body>
            </Card>
        )
    }
}

export default SelectionCard
