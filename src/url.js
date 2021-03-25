
   export const fetchUrl =()=>{
      const dev = "http://localhost:3000"
      const prod = "https://date-sidekick-api.herokuapp.com"
      return process.env.NODE_ENV === 'development' ? dev : prod
   }
