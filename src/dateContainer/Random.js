import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import Food from './Food'
import Activity from './Activity'
import {CardDeck, Jumbotron, Container, Row, Col} from 'react-bootstrap'
import RandomFood from '../datePresentation/RandomFood'
import RandomFoodActivity from '../datePresentation/RandomFoodActivity'
import {withRouter} from 'react-router-dom'

class Random extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        renderDate: false
    }



    handleChange=(event)=>{
        if(event.target.value !== 5){
            this.setState({
                renderDate: false,
                zipcode: event.target.value
            })
        } else{
            this.setState({
                zipcode: event.target.value
            })
        }
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.name,
            renderDate: false
        })
    }

    //I have a presentation component to render with new route.
    // I need to find out how to and where to redirect after submit of the form to the new route that will render new presentational components
    // I will need to add in new route component a button to keep getting new dates and also to start over.
    // I will need to make it where if you go straight to route and no zipcode props then redirects back to new route
    renderRandomDate=()=>{
        // debugger
        if(this.state.dateType=='food'){
            this.props.history.push(`/random-food-dates/${this.state.zipcode}`)
        }else{
            this.props.history.push(`/random-food-activity-dates/${this.state.zipcode}`)
        }
        // return <div>
        //     {this.state.dateType=='food'? <RandomFood zipcode={this.state.zipcode}/>: '' }
        //     {this.state.dateType=='food-activity'? <RandomFoodActivity zipcode={this.state.zipcode}/> : ''}        

            
            {/* {this.state.dateType=='food'? <Row><Food zipcode={this.state.zipcode} type='food'  random='true'/></Row>: '' }
            {this.state.dateType=='food-activity'? <Row><Col><Food zipcode={this.state.zipcode} type='food'  random='true'/></Col>+<Col><Activity zipcode={this.state.zipcode} type='food-activity' random={'true'} /></Col></Row>: ''}         */}
        // </div>
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if((this.state.dateType !== '') && (this.state.zipcode.length == 5)){
            this.setState({
                renderDate: true,
            })
        }else{
            this.setState({
                renderDate: false
            })
        }
    }

    render(){
        return <div>
            <Jumbotron fluid>
                <DateTemplates handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipcode={this.state.zipcode}/>  
            </Jumbotron>
            <Container >
                <Row className="justify-content-md-center">
                    <CardDeck>
                        {this.state.renderDate ? this.renderRandomDate():<p>Select date type and enter 5 digit zipcode</p>}
                    </CardDeck>
                </Row>
            </Container>
        </div>
    }
}

export default withRouter(Random)