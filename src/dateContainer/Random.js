import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import {CardDeck, Jumbotron, Container, Row, Col} from 'react-bootstrap'
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

    renderRandomDate=()=>{
        // debugger
        if(this.state.dateType=='food'){
            this.props.history.push(`/random-food-dates/${this.state.zipcode}`)
        }else{
            this.props.history.push(`/random-food-activity-dates/${this.state.zipcode}`)
        }
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