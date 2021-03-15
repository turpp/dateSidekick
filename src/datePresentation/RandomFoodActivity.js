// import React from 'react'
// import {Row, Col} from 'react-bootstrap'
// import Food from '../dateContainer/Food'
// import Activity from '../dateContainer/Activity'

// function RandomFoodActivity(props){
//     return <Row><Col><Food zipcode={props.zipcode} type='food'  random='true'/></Col>+<Col><Activity zipcode={props.zipcode} type='food-activity' random={'true'} /></Col></Row>
// }

// export default RandomFoodActivity



import React from 'react'
import {Row, Container, CardDeck, Jumbotron, Button,Col} from 'react-bootstrap'
import Food from '../dateContainer/Food'
import Activity from '../dateContainer/Activity'



class RandomFoodActivity extends React.Component{
    state={
        reloader: Math.random()
    }
    render(){
        
    return <Jumbotron>
    <Container fluid>
    <Row className="justify-content-md-center">
        <CardDeck>
        <Row><Col><Food zipcode={this.props.match.params.zipcode} type='food'  random='true'/></Col>+<Col><Activity zipcode={this.props.match.params.zipcode} type='food-activity' random={'true'} /></Col></Row>
        </CardDeck>
    </Row>
</Container>
<Button variant='info' onClick={()=>this.setState({reloader: Math.random()})}>Try Again</Button>{'   '}
<Button variant='info' onClick={()=>this.props.history.push('/random-date/new')}>Start Over</Button>
</Jumbotron>
    }

}

export default RandomFoodActivity