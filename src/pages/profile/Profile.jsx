import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
// import axios from 'axios';
import "./profile.css"
import { axiosInstance } from "../../Config";

export default function Profile() {
    const {user} = useContext(Context);
    const [curr, setCurr] = useState();
    useEffect(()=>{
        const currUser = async()=>{
            const res = await axiosInstance.get(`/users/${user._id}`);       
            setCurr(res.data);
        }
        currUser();
    },)
    return (
        <div className="profile">
                <img
                className = "pro-img"
                src="https://res.cloudinary.com/dxtc7hof8/image/upload/v1636728843/8af6cc25-c7a8-4d3e-80e8-69244713fa2e_whaks3.jpg"
                alt="Too bad you can't see me"
                />
            <div className="hr3"></div>
            <p className="prof-text">Username: {curr && curr.username}</p>
            <p className="prof-text">Total Score: {curr && curr.totalScore}</p>
        </div>
    )
}
