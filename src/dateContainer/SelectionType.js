import React from 'react'
import { Carousel, Container, Row, Col} from 'react-bootstrap'
import {fetchUrl} from '../url'
import LoaderWheel from '../datePresentation/LoaderWheel'
import SelectionCard from '../datePresentation/SelectionCard'

export default class SelectionType extends React.Component{
    state={
        search: '', 
        activityResults: [],
        dateActivity:{},
        loading: true
    }

    renderActivitySelection=()=>{
        if(this.state.activityResults.length >0){
            if(this.props.random==='true'){
                let randomActivity = this.state.activityResults[Math.floor(Math.random() * this.state.activityResults.length)]
                return <SelectionCard activity={randomActivity} addActivityToDate={this.props.addActivityToDate} random='true'/>
            }else{
                let activityCards = this.state.activityResults.map(result=>{
                    return <SelectionCard activity={result} addActivityToDate={this.props.addActivityToDate} random='false'/>
                })

            let slides = [activityCards.slice(0,3),activityCards.slice(3,6),activityCards.slice(6,9),activityCards.slice(9,12),activityCards.slice(12,15),activityCards.slice(15,18),activityCards.slice(18,21)]
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
            if(this.props.type==='food-activity'){
            this.setState({
                activityResults: json.activity.businesses,
                loading: false
            })
            }else{
                this.setState({
                    activityResults: json.businesses,
                    loading: false
                })   
            }           
        })
    }

    render(){
        if(this.state.loading){
            return <div className='App'>
    <LoaderWheel/>
  </div>
        }
        return <div className='datecard'>
            {this.props.type === 'food'?<h1>Food Offerings</h1>: <h1>Activity Offerings</h1> }
            <Container fluid>
                <Row>
                    <Col>
                        {this.renderActivitySelection()}    
                    </Col>
                </Row> 
            </Container>
        </div>
    }
}