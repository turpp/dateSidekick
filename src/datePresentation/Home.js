import React from 'react'

function Home(){
    return(
        <body>
        <h4>Welcome to Date Sidekick!</h4>
        <a href='/random'><button id='random-date'>Random Date</button> </a>
        <a href='/custom'><button id='custom-date'>Create custom Date</button></a>
        <a href='/signin'><button id='sign-in'>Sign In</button></a>
      </body>


    )
}

export default Home