import {React,useState} from 'react'
import {Button,Card,ToggleButton, ButtonGroup,Form, Container, Row, Col} from 'react-bootstrap'
import '../App.css';

function DateTemplates(props){
    const [radioValue, setRadioValue] = useState('0');

    const radios = [
        { name: 'Food', value: '1', type: 'food' },
        { name: 'Food and Activity', value: '2', type: 'food-activity' },
      ];

    return <div>
      <Container fluid="md">
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
      <Row className="justify-content-md-center">
        <Col md='auto'>
          <Form inline onSubmit={props.handleSubmit} >
            <Form.Group>
            <Form.Label>Zipcode: </Form.Label>
            <Form.Control
              type="number"
              className="mx-sm-3"
              value={props.zipcode}
              onChange={props.handleChange}
            />
            <Form.Text id="passwordHelpInline" muted style={{paddingReft: 80}}>
                (5 digit zipcode) 
            </Form.Text>
            </Form.Group>
          <Button type='submit' size='sm' >Search!</Button>
          </Form>
        </Col>
      </Row>
      </Container>
    </div>
}

export default DateTemplates