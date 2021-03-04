
   export const fetchUrl =()=>{
      const dev = "http://localhost:3000"
      const prod = "https://gentle-inlet-80267.herokuapp.com"
      return process.env.NODE_ENV === 'development' ? dev : prod
   }
