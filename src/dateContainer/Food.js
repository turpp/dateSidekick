import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'
import {CardDeck, Carousel, Container, ListGroup, Row, Col} from 'react-bootstrap'
import CurrentDate from '../datePresentation/CurrentDate'
import {fetchUrl} from '../url'
import '../App.css';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default class Food extends React.Component{

    state={
        search: '', 
        results: [],
        dateFood: {}
    }



    renderFoodSelction=()=>{
        if(this.state.results.length >0){
            if(this.props.random=='true'){
                let randomFood = this.state.results[Math.floor(Math.random() * this.state.results.length)]
                return <FoodSelection food={randomFood} addFoodToDate={this.props.addFoodToDate} random='true'/>
            }else{
                // return this.state.results.map(result=>{
                //     return <Carousel.Item><FoodSelection food={result} addFoodToDate={this.props.addFoodToDate} random='false'/></Carousel.Item>
                
                    let foodCards = this.state.results.map(result=>{
                        return <FoodSelection food={result} addFoodToDate={this.props.addFoodToDate} random='false'/>
                })

                let slides = [foodCards.slice(0,3),foodCards.slice(3,6),foodCards.slice(6,9),foodCards.slice(9,12),foodCards.slice(12,15),foodCards.slice(15,18),foodCards.slice(18,21)]
                return <Carousel>
                {slides.map(slide=>{
                   return <Carousel.Item>
                    <Row>
                    {slide.map(result=>{
                        return <Col>
                        {result}
                        </Col>
                    })
                }
                </Row>
                </Carousel.Item>
                })}
                </Carousel>
            }
        }
    }

    componentDidMount(){
        fetch(`${fetchUrl()}/search/${this.props.zipcode}/${this.props.type}`).then(resp=>resp.json()).then(json=>{
            this.setState({
                results: json.businesses
            })           
        })
    }

    render(){
        return <div>
            <h4>Food offerings</h4>
            <Container fluid>
               <Row>
            <Col>
{this.renderFoodSelction()}    
        </Col>
        </Row> 
        </Container>
        </div>

    }
}


