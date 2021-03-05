import React from 'react';
import Navbar from './Navbar';
import './UserDetailsStyles.css';
import API_KEY from './API_KEY';


function UserDetails(props) {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [assetBalance, setAssetBalance] = React.useState(0);
    const [cashBalance, setCashBalance] = React.useState(0);
    const [nric, setNric] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [email, setEmail] = React.useState("");

    //for storing of account key state

    function moveToAssetCurrentPrice(){
        //routing here
    }

    function moveToTransactions() {
        //routing here
    }

    //calls once on launch
    React.useEffect( () => {
            const axios = require('axios')
            async function makeRequest(){
                const config ={
                    method: 'post',
                    url: "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login",
                    headers: { "x-api-key": API_KEY },
                    data: JSON.stringify({
                        "username" : "Group21",
                        "password" : "SrtURGjh7DEAMZM"
                    })
                }
                let res = await axios(config)
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setNric(res.data.nric);
                setAddress(res.data.address);
                setEmail(res.data.email);
                setPhoneNumber(res.data.phoneNumber);

            }
            makeRequest();
    }, [])

    React.useEffect( () => {
        const axios = require('axios')
        async function makeWalletRequest(){
            const config ={
                method: 'post',
                url: "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
                headers: { "x-api-key": API_KEY },
                data: JSON.stringify({
                        "accountKey" : "97c35611-1394-444f-80fa-3309187bc661"
                })
            }
        let res = await axios(config)
            setAssetBalance(res.data.assetBalance);
            setCashBalance(res.data.cashBalance);
        }
        makeWalletRequest();
    }, [])

    return (
        <div className="UserDetails">
            <h1> Welcome {firstName} {lastName}</h1>
            <p> NRIC: {nric} </p>
            <p> Address: {address} </p>
            <p> Phone Number: {phoneNumber} </p>
            <p> Email: {email} </p>
                <div>
                    <p> User Asset balance: ${assetBalance}</p>
                    <p> User Cash balance: ${cashBalance}</p>
                </div>
            <button onClick={moveToTransactions}>Transaction History</button>
            <button onClick={moveToAssetCurrentPrice}>Asset Current Pricing</button>
        </div>
    )
    }

    export default UserDetails;