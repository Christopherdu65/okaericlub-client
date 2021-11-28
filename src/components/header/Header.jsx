import './header.css'
import { Link } from 'react-router-dom'
import {useContext} from "react";
import {Context} from "../../context/Context";

export default function Header() {
    const {user} = useContext(Context);
    function redirect(e) {
        e.preventDefault();
        user? window.location.replace("/quiz"): window.location.replace("/register");
    }

    return (
        // <div className="main-container">
            <div className="container">
                <div className="header">
                    <div className="col">
                        <div className="content">
                            <h1 className="heading">Prove your worth to the <span>Goddess</span></h1>
                            <p className="info">Have fun and play our anime quiz as you compete with other knights in the leaderboard. </p>
                            {/*<Link to="/register"><button className="header-btn">Get Started</button></Link>*/}
                            <button onClick={redirect} className="header-btn">Get Started</button>
                        </div>
                    </div>
                </div>
                </div>
                // </div>
    )
}
