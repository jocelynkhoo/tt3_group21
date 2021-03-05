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
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [email, setEmail] = React.useState("");

    const headers = {
        'x-api-key': 'PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5'
    }

    React.useEffect(() => {
        axios.post(Helper.getUserAPI(), data, {
            headers: headers
          })
          .then((response) => {
              console.log(response);
            dispatch({
              type: FOUND_USER,
              data: response.data[0]
            })
          })
          .catch((error) => {
            dispatch({
              type: ERROR_FINDING_USER
            })
          }), []
        }
    )


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
            <button>Transaction History</button>
            <button>Asset Current Pricing</button>
        </div>
    )


export default UserDetails;