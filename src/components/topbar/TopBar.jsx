import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import "./topbar.css";

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
    return (
        <div className = "top">
            <div className="topLeft">
            <Link className="link" to="/"><img className="logo"src="https://fontmeme.com/permalink/211112/8025a2e0b498c5ecf47ee9807ea056a7.png" alt="haikyu-anime-font" border="0"/></Link>
                </div>
            <div className="topCenter">
                <ul className="topNavList">
                    <li className="topNavItem">
                        <Link className="link" to="/">
                        Home</Link>
                        </li>
                    <li className="topNavItem"><Link className="link" to="/checklist">
                        Checklist</Link>
                        </li>
                    <li className="topNavItem"><Link className="link" to="/description">
                        Description</Link>
                        </li>
                    <li className="topNavItem"><Link className="link" to="/about">
                        About Us</Link>
                        </li>
                    <li className="topNavItem" onClick={handleLogout}>
                        {user? "Logout": ""}
                        </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user? ( <Link className="link" to="/profile/userId">
                    <img
                    className = "topImg"
                    src="https://res.cloudinary.com/dxtc7hof8/image/upload/v1636728843/8af6cc25-c7a8-4d3e-80e8-69244713fa2e_whaks3.jpg"
                    alt="Too bad you can't see me"
                    />
                    </Link>) : (
                        <ul className="topNavList">
                            <li className="topNavItem">
                                <Link className="link" to="/register">
                                Register</Link>
                            </li>
                            <li className="topNavItem">
                                <Link className="link" to="/login">
                                Login</Link>
                            </li>
                        </ul>
                    )
                }
     
            </div>
        </div>
    )
}
