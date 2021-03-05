import React from 'react';
import Navbar from './Navbar';
import './UserDetailsStyles.css';
import axios from 'axios';
import API_KEY from './API_KEY';


function UserDetails(props) {

    const [firstName, setFirstName] = React.useState("First Name");
    const [lastName, setLastName] = React.useState("Last Name");
    const [assetBalance, setAssetBalance] = React.useState(0);
    const [cashBalance, setCashBalance] = React.useState(0);
    const [nric, setNric] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState()
    const [email, setEmail] = React.useState("");

    const ACCOUNT_KEY = "";

    React.useEffect(() => {
        axios.get(`https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login?x-api-key= ${API_KEY}`)
            .then (res  => {
            console.log(res)
        })
            .catch(err => {
                console.log(err)
            })
    },[])


    return (
        <div className="UserDetails">
            <Navbar />
            <h1> Welcome {firstName} {lastName}</h1>
            <p> NRIC: {nric} </p>
            <p> Address: {address} </p>
            <p> Phone Number: {phoneNumber} </p>
            <p> Email: {email} </p>
                <div>
                    <p> User Asset balance: {assetBalance}</p>
                    <p> User Cash balance: {cashBalance}</p>
                </div>
        </div>
    )
}

export default UserDetails;