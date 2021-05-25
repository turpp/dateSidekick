import React from 'react'
import DateTemplates from '../datePresentation/DateTemplates'
import { Jumbotron, Container, Alert} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

class Random extends React.Component{
    state={
        dateType: '',
        zipcode: '',
        renderDate: false,
        showAlert: false,
        showZipAlert: false,
        showDateTypeAlert: false
    }


//need to redo to enter max of 5 like with custom
    handleChange=(event)=>{
        if(event.target.value.length <=5){
            this.setState({
                zipcode: event.target.value
            })
        }






        // if(event.target.value !== 5){
        //     this.setState({
        //         renderDate: false,
        //         zipcode: event.target.value
        //     })
        // } else{
        //     this.setState({
        //         zipcode: event.target.value
        //     })
        // }
    }

    handleClick=(event)=>{
        this.setState({
            dateType: event.target.name,
            renderDate: false
        })
    }

    renderRandomDate=()=>{
        if(this.state.dateType==='food'){
            this.props.history.push(`/random-food-dates/${this.state.zipcode}`)
        }else{
            this.props.history.push(`/random-food-activity-dates/${this.state.zipcode}`)
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if((this.state.dateType !== '') && (this.state.zipcode.length === 5)){
            this.setState({
                renderDate: true,
            })
        }else{
            if(this.state.dateType === ''){
                this.setState({
                    showDateTypeAlert: true,
                    showZipAlert: false
                })
            } else {
                this.setState({
                    showZipAlert: true,
                    showDateTypeAlert: false
                })
            }






            // this.setState({
            //     renderDate: false,
            //     showAlert: true
            // })
        }
    }

    render(){
        return <div>
            {this.state.showZipAlert ? <Alert variant='danger'>Make sure to enter a 5 digit zipcode.</Alert>: ''}
            {this.state.showDateTypeAlert ? <Alert variant='danger'>Make sure to select Food or Food and Activity Button.</Alert>: ''}
            <Jumbotron fluid>
                <DateTemplates handleClick={this.handleClick} handleSubmit={this.handleSubmit} handleChange={this.handleChange} zipcode={this.state.zipcode}/>  
            </Jumbotron>
            <Container >
                
                    
                    
                        {this.state.renderDate ? this.renderRandomDate():<p>Select date type and enter 5 digit zipcode</p>}
                    
                    
                
            </Container>
        </div>
    }
}

export default withRouter(Random)