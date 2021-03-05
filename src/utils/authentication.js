import axios from "axios";

export const loginUser = (userData, history) => {
  const loginUrl = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login"
  let config = {
    headers: {
      "x-api-key": "PgfXlfXJFM2QyTmuBOTKUazP03JWex648svPUCl5",
    }
  }
  axios
    .post(loginUrl, userData, config)
    .then((res) => {
      if(res.status === 200){
        console.log(res.data.accountKey)
        const idToken = `Bearer ${res.data.accountKey}`;
        localStorage.setItem("idToken", idToken);
        axios.defaults.headers.common["Authorization"] = res.data.accountKey;
        history.push("/dashboard");
      } else {
        console.log("Invalid return")
      }
    })
    .catch((err) => {
      console.log("Error block");
      console.log(err);
    })  
};