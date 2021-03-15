import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import Food from './Food'
import Activity from './Activity'
import {CardDeck, Jumbotron, Container, Row, Col} from 'react-bootstrap'

export default class Random extends React.Component{
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

    renderRandomDate=()=>{
        return <div>
            {this.state.dateType=='food'? <Row><Food zipcode={this.state.zipcode} type='food'  random='true'/></Row>: '' }
            {this.state.dateType=='food-activity'? <Row><Col><Food zipcode={this.state.zipcode} type='food'  random='true'/></Col>+<Col><Activity zipcode={this.state.zipcode} type='food-activity' random={'true'} /></Col></Row>: ''}        
        </div>
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