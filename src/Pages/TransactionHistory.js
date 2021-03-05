import React from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
const TransactionHistory = () => {

    const [transactions, setTransactions] = React.useState([{}])

    const options = {
        
        headers: {'x-api-key':'PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5'}
    }
    const getTransactionHistory = () => {
        
        axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
        {
        //   "accountKey":localStorage.getItem("accountKey")
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

    

    React.useEffect(() => {
        getTransactionHistory()

    }, [])



    return (
        <div>
          <table>
            {/* <Table striped bordered hover> */}
            <thead>
                <tr>
                <th>#</th>
                <th>TransactionID</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Symbol</th>
                <th>Total Amount</th>
                <th> Order Type </th>
                </tr>
             </thead>
             <tbody>
                {transactions.map((transaction, index) => {
                    return (
                       
                        <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                        <td>
                            {transaction.transactionId}
                        </td>
                        <td>
                            {transaction.assetAmount}
                        </td>
                        <td>
                            {transaction.assetPrice}
                        </td>
                        <td>
                            {transaction.assetSymbol}
                        </td>
                        <td>
                            ${transaction.cashAmount}
                        </td>
                        <td style={{color: transaction.orderType === "SELL" ? "RED" : "GREEN"}} >
                            {transaction.orderType}
                        </td>
                        
                        </tr>
                        
                        
                    )
                })}
             </tbody>
             </table>
            {/* </Table> */}
        </div>
    )
}

export default TransactionHistory
