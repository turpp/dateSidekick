import React from 'react'
import FoodSelection from '../datePresentation/FoodSelection'
import {Carousel, Container, Row, Col} from 'react-bootstrap'
import {fetchUrl} from '../url'
import Loader from "react-loader-spinner";
import '../App.css';
import 'react-multi-carousel/lib/styles.css';


export default class Food extends React.Component{

    state={
        search: '', 
        results: [],
        dateFood: {},
        loading: true
    }

    renderFoodSelction=()=>{
        if(this.state.results.length >0){
            if(this.props.random=='true'){
                let randomFood = this.state.results[Math.floor(Math.random() * this.state.results.length)]
                return <FoodSelection food={randomFood} addFoodToDate={this.props.addFoodToDate} random='true'/>
            }else{                
                let foodCards = this.state.results.map(result=>{
                return <FoodSelection food={result} addFoodToDate={this.props.addFoodToDate} random='false'/>
            })
                let slides = [foodCards.slice(0,3),foodCards.slice(3,6),foodCards.slice(6,9),foodCards.slice(9,12),foodCards.slice(12,15),foodCards.slice(15,18),foodCards.slice(18,21)]
                return <Carousel fade >
                {slides.map(slide=>{
                   return <Carousel.Item >
                    <Row>
                    {slide.map(result=>{
                        return <Col>
                            <div className='d-block h-50'>
                                {result}
                            </div>
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
                results: json.businesses,
                loading: false
            })           
        })
        
    }

    render(){
        if(this.state.loading){
            return <div className='App'>
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
            />
        </div>
        }
        return <div>
            <h2>Food Offerings</h2>
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


