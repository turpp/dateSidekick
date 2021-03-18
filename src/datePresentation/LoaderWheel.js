import React from 'react'
import Loader from "react-loader-spinner";


function LoaderWheel () {
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

export default LoaderWheel