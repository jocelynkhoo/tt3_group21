import React from "react"
import axios from "axios"
import "./BuySell.css"



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
        this.handleBuy = this.handleBuy.bind(this)
        this.handleSell = this.handleSell.bind(this)
        this.handleNumbers = this.handleNumbers.bind(this)
    }

    componentDidMount(){
        const assetsUrl = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add"
        let config = {
        headers: {
         "x-api-key": "PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5",
      }
    }
    axios
    .post(assetsUrl, {accountKey:"97c35611-1394-444f-80fa-3309187bc661", orderType:"Sell", assetAmount: 10}, config)
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

    handleNumbers(event){
            const re = /^[0-9\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
               this.setState({number: event.target.value})
            }
            else{
                alert("Input Numbers Only")
            }
    }

    handleBuy (event){
        event.preventDefault()
        this.setState({orderType: "Buy"})
        alert(`You have bought ${this.state.number} ${this.state.assets} at ${this.state.price}`)
    }

    handleSell (event) {
        event.preventDefault()
        this.setState({orderType: "Sell"})
        alert(`You have sold ${this.state.number} ${this.state.assets} at ${this.state.price}`)

    }

    render(){
        return(
            <div className = "buysell">
            <form className = "asset-form">
                <br/>
                <label>
                    Select Asset: 
                <select>
                    <option>{this.state.assets}</option>
                </select>
                </label>
                <p> The Price of this Asset is: {this.state.price}</p>
            
                <label>
                Input Amount Here: 
                <input 
                    type = "text"
                    name = "number"
                    onChange = {this.handleNumbers}
                    /> 
                </label>
               
                    <br/>
                    <br/>

                <button className="button" onClick={this.handleBuy}>Buy</button>
                <button className="button" onClick={this.handleSell}>Sell</button>
             </form>       
            </div>
        )
    }
}



export default BuySell