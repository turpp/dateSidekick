import React from 'react'
import {Jumbotron , Container, Button} from 'react-bootstrap'

function Home(){
    return(


        <Jumbotron fluid>
        <Container>
            <h1>Welcome to Date Sidekick!</h1>
            <p>
            Deciding where to go on a date can be tough. Date Sidekick has two ways it can help. With the help of Yelp you can plan you next date with a list of options from your choosen zipcode. You can createa nd save this date to yur profile. For the adventurious folks we have random mode. This will give you a random place to go based on your zipcode!
            </p>
            {/* <a href='/random'><Button variant="primary">Random Date</Button>{' '} </a> */}
            <Button variant="primary" onClick={()=>window.location.href='/random'}>Random Date</Button>{' '}

        <Button variant="primary" onClick={()=>window.location.href='/custom'}>Create a custom date</Button>{' '}
        <Button variant="primary" onClick={()=>window.location.href='/login'}>Login</Button>{' '}

        </Container>
        </Jumbotron>



    )
}

export default Home