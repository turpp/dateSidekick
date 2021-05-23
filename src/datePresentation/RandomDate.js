import React from 'react'
import {Row, Container, CardDeck, Jumbotron, Button,Col} from 'react-bootstrap'
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
        return <Jumbotron>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <CardDeck>
                        {this.props.type==='food'?<Row><SelectionType zipcode={this.props.match.params.zipcode} type='food'  random='true'/></Row> : <Row><Col><SelectionType zipcode={this.props.match.params.zipcode} type='food'  random='true'/></Col><Col><SelectionType zipcode={this.props.match.params.zipcode} type='food-activity' random={'true'} /></Col></Row>}
                    </CardDeck>
                </Row>
            </Container>
            <Button variant='info' onClick={()=>this.setState({reloader: Math.random()})}>Try Again</Button>{'   '}
            <Button variant='info' onClick={()=>this.props.history.push('/random-date/new')}>Start Over</Button>
        </Jumbotron>
        }
    }

}

export default RandomFood