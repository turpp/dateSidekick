import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import CurrentDate from '../datePresentation/CurrentDate'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import '../App.css';
import SelectionType from './SelectionType'
import SelectionCard from '../datePresentation/SelectionCard'



export default class Custom extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        renderFood: false,
        renderActivity: false,
        dateFood:[],
        dateActivity: []
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.name,
            renderFood: false,
            renderActivity: false,
            dateFood:[],
            dateActivity: []
        })
    }

    handleChange=(event)=>{
        if(event.target.value !== 5){
            this.setState({
                renderFood: false,
                renderActivity: false,
                zipcode: event.target.value
            })
        } else{
            this.setState({
                zipcode: event.target.value
            })
        }
    }


    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.dateType  && this.state.zipcode !== ''){
            switch(this.state.dateType){
                case 'food':
                this.setState({
                    renderFood: true,
                    renderActivity: false
                })
                break
                case 'food-activity':
                    this.setState({
                        renderActivity: true,
                        renderFood: true
                    })
                break
                default:
                    this.setState({
                        renderFood: false,
                        renderActivity: false
                    })
            }
        }
    }

    renderTemplate=()=>{
        return <DateTemplates handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipcode={this.state.zipcode}/>
    }
    
    renderChoices=()=>{
        switch(true){
            case(this.state.renderFood && this.state.renderActivity):
               return <div>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <SelectionType zipcode={this.state.zipcode} type='food' random='false' addActivityToDate={this.addFoodToDate}/>
                        </Row>
                    </Container>
                    <br></br>
                    <br></br>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <SelectionType zipcode={this.state.zipcode} type='food-activity' random='false' addActivityToDate={this.addActivityToDate}/>
                        </Row>
                    </Container>
                </div>
            case (!this.state.renderActivity && this.state.renderFood):
                return <div>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <SelectionType zipcode={this.state.zipcode} type='food' random='false' addActivityToDate={this.addFoodToDate}/>
                        </Row>
                    </Container>
                </div>
            default: 
             return <p>Select date type and enter 5 digit zipcode</p>
        }
    }

    addFoodToDate=(food)=>{
        this.setState({
            dateFood: food
        })
    }

    addActivityToDate=(activity)=>{
        this.setState({
            dateActivity: activity
        })
    }

    render(){
        return <div>
            <Jumbotron fluid>
                <DateTemplates handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipcode={this.state.zipcode}/>  
            </Jumbotron>
            <Container fluid>
                <Row className="justify-content-md-center">
                    {this.state.dateType !== '' ? <CurrentDate food={this.state.dateFood} activity={this.state.dateActivity} type={this.state.dateType}/>: '' }
                </Row>
            </Container>
            {this.renderChoices()}    
            <br></br>
            <br></br>
            <br></br>
        </div>

    }
}