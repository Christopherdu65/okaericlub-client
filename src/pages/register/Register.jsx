import { Link } from 'react-router-dom'
import './register.css'
import { useState } from "react";
import { axiosInstance } from '../../Config';
export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [isReg, setIsreg] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axiosInstance.post("/auth/register", {
            // await axiosInstance.post("/auth/register", {
                // const res = await axios.post("https://okaeri-club.herokuapp.com/api/auth/register", {
                username,
                password,
            });
                // .then(res.data && setIsreg(true) && window.location.replace("/login"));
                if(res.status === 200 || res.status === 204) {
                    window.location.replace("/login");
                }

        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="main">
            <div className="register">
                <span className="registerTitle"> Okaeri Club</span>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label for="chk" aria-hidden="true">Username</label>
                    <input className="registerInput" type="text" name="txtplaceholder" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="text" className="registerInput" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
                    <button className="registerButton" type="submit">register</button>
                    <Link className="extUser link" to="/login">Already a user? <strong>Sign in</strong></Link>
                    {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong! username may already be in use</span>}
                    {isReg && <span style={{color:"green", marginTop:"10px"}}>Registration successful!!!. Please <Link to="/login">login</Link>here</span>}
                </form>
            </div>
        </div>
    )
}
