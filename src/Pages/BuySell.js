import React from "react"
import axios from "axios"



class BuySell extends React.Component{
    constructor(){
        super()
        this.state = {
            assets: [],
            assetAmount: [],
            orderType: [],
            price:[],
            number: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit2 = this.handleSubmit.bind(this)
    }

    componentWillMount(){
        const assetsUrl = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add"
        let config = {
        headers: {
         "x-api-key": "PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5",
      }
    }
    axios
    .post(assetsUrl, {accountKey:"97c35611-1394-444f-80fa-3309187bc661", orderType:"Buy", assetAmount: 10}, config)
    .then((res) => {
      console.log(res.data)
      this.setState({assets: res.data.assetSymbol})
      this.setState({orderType: res.data.orderType})
      this.setState({price: res.data.assetPrice})
      this.setState({assetAmount: res.data.assetAmount})

    })
    }

    handleChange (event){
        const{name,value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit (event){
        event.preventDefault()
        this.setState({orderType: "Buy"})
        return(<h2>You have bought {this.state.number} {this.state.assets} at ${this.state.price}</h2>)
    }

    handleSubmit2 = (event) => {
        event.preventDefault()
        this.setState({orderType: "Sell"})
        return(<h2>You have sold {this.state.number} {this.state.assets} at ${this.state.price}</h2>)

    }

    render(){
        return(
            <div>
            <form className = "asset-form">
                <select>
                    <option>{this.state.assets}</option>
                </select>
                <input 
                    type = "text"
                    name = "number"
                    onChange = {this.handleChange}
                    />

                <button  onSubmit={this.handleSubmit}>Buy</button>
                <button onSubmit={this.handleSubmit2}>Sell</button>
                <h2 className="Buy" onClick = {this.handleSubmit}></h2>
                <h2 className="Sell" onClick = {this.handleSubmit2}></h2>
             </form>       
            </div>
        )
    }
}



export default BuySell