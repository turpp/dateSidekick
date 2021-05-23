import {React,useState} from 'react'
import {Button,ToggleButton, ButtonGroup,Form, Container, Row, Col} from 'react-bootstrap'
import '../App.css';

function DateTemplates(props){
    const [radioValue, setRadioValue] = useState('0');

    const radios = [
        { name: 'Food', value: '1', type: 'food' },
        { name: 'Food and Activity', value: '2', type: 'food-activity' },
      ];

    return <Container fluid="md">
        <Row>
          <Col>
            <h1>What type of date?</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Select a date type and enter a zipcode </h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup toggle>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="warning"
                  name={radio.type}
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => {
                      setRadioValue(e.currentTarget.value)
                      props.handleClick(e)
                  }
              }
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
      <br></br>
      <br></br>
      <Row >
        <Col >
          <Form onSubmit={props.handleSubmit} >
            <Form.Group>
            <Form.Row>

            <Col >
            <Form.Label>Zipcode: </Form.Label>
            <Form.Control
              type="number"
              className='zipcode-field'
              value={props.zipcode}
              onChange={props.handleChange}
              placeholder='5 digit zipcode'
    
            />
            
          <Button type='submit' size='lg' >Search!</Button>
          </Col>
          </Form.Row>
          </Form.Group>
          </Form>
        </Col>
      </Row>
      </Container>

}

export default DateTemplates