import React from 'react';
import axios from 'axios';

function Currentprices() {
    const [price, setPrice] = React.useState("");
    React.useEffect( () => {
      const axios = require('axios')
      async function makeRequest(){
          const config ={
              method: 'post',
              url: "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current",
              headers: { "x-api-key": "PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5" },
          }
          let res = await axios(config)
          setPrice(res.data.price);
     
      }
      makeRequest();
    }, [])
     
              return( //display
               <div>
                <h1>Current Prices</h1>
                <p>Price:{price}</p> 
                <p>AssetSymbol: TKK</p>
              </div>
            )
     }         
    export default Currentprices;