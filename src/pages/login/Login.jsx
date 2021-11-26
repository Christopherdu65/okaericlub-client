// import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../Config";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      console.log("success");
    } catch (err) {
        setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

    return (
        <div className="main">
            <div className="login">
            <span className="loginTitle"> Okaeri Club</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label for="chk" aria-hidden="true">Username</label>
                <input className="loginInput" type="text" name="txtplaceholder" placeholder="Enter your username..." ref={userRef}/>
                <label>Password</label>
                <input type="text" className="loginInput" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                <Link className="newUser link" to="/register">Not a user? <strong>Sign up</strong></Link>
                {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong! Check your password and username again</span>}
                </form> 
            </div>
        </div>
    )
}
