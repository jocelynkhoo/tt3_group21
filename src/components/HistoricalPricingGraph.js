import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { LineChart, Line,YAxis, XAxis,AreaChart,linearGradient, CartesianGrid , Tooltip, Area} from 'recharts';
import moment from 'moment';

const HistoricalPricingGraph = () => {

    const [transactions, setTransactions] = React.useState([{}])
    const [historicalPrice, setHistoricalPrice] = useState([])

     
    const options = {
        headers: {'x-api-key':'PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5'}
    }
    const getTransactionHistory = () => {
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
        {
          "accountKey":"97c35611-1394-444f-80fa-3309187bc661"
        },
        options
        )
        .then(res => {
            if (res.status === 200) {
                console.log("get transactions success", res)
                setTransactions(res.data)
            }

        })
        .catch(err => {
            console.log(err)
           
        })
    }

    const getHistoricalPricing = () =>{
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical",
        {
          "accountKey":"97c35611-1394-444f-80fa-3309187bc661"
        },
        options
        )
        .then(res => {
            if (res.status === 200) {
                console.log("get historical pricing success", res)
                setHistoricalPrice(res.data)
            }

        })
        .catch(err => {
            console.log(err)
           
        })
    }
    useEffect(() => {
        getTransactionHistory()
        getHistoricalPricing()
        
    }, [])

    return (
        <div>
            <LineChart width={1000} height={400} data={historicalPrice} >
                <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
                <XAxis dataKey="timestamp" tickFormatter={(tickItem) => moment.unix(tickItem).format('DD/MM')} />
                <YAxis />
            </LineChart>


      <AreaChart width={730} height={250} data={historicalPrice} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient> */}
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="timestamp"   tickFormatter={(tickItem) => moment.unix(tickItem).format('DD/MM')}/>
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip labelFormatter={(tickItem) => moment.unix(tickItem).format('DD/MM')} formatter={(value, name, props) => { return ["$"+value, name ]}}/>
        {/* <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
        <Area type="monotone" dataKey="price" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
        </div>
    )
}

export default HistoricalPricingGraph