import axios from "axios";

export const loginUser = (userData, dispatch, history) => {
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
        axios.defaults.headers.common["x-api-key"] = res.data.accountKey;
        dispatch({type: 'AUTH', payload: true});
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

export const logoutUser = (dispatch) => {
  localStorage.removeItem("idToken");
  delete axios.defaults.headers.common["x-api-key"];
  dispatch({type: 'AUTH', payload: false});
}