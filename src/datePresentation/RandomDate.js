import React from 'react'
import {Row, Jumbotron, Button,Col} from 'react-bootstrap'
import SelectionType from '../dateContainer/SelectionType'

class RandomFood extends React.Component{
    state={
        reloader: Math.random()
    }
    render(){
        if(this.props.match.params.zipcode.length > 5){
            this.props.history.push('/random-date/new')
            return null
        }else{
        return <Jumbotron style={{padding: '1rem .5rem'}}>           
                <Row className="justify-content-md-center">  
                        {this.props.type==='food'?<Col style={{padding: '0px', maxWidth: '600px'}}><SelectionType zipcode={this.props.match.params.zipcode} type='food'  random='true'/></Col> : <><Col style={{padding: '0px', maxWidth: '600px'}}><SelectionType zipcode={this.props.match.params.zipcode} type='food'  random='true'/></Col><Col style={{padding: '0px', maxWidth:'600px'}}><SelectionType zipcode={this.props.match.params.zipcode} type='food-activity' random={'true'} /></Col></>}                   
                </Row>
            <Button variant='info' onClick={()=>this.setState({reloader: Math.random()})}>Try Again</Button>{'   '}
            <Button variant='info' onClick={()=>this.props.history.push('/random-date/new')}>Start Over</Button>
        </Jumbotron>
        }
    }

}

export default RandomFood