import React from './checklist.css';
import { Link } from 'react-router-dom'
export default function Checklist() {
    return (
        <div className="checklist">
            <div className="checklistTitle">Checklist</div>
            <ul className="checklist_Item">
                <li className="item_name">Site Description</li>
                <Link className = "check-link" to ="/description"> <p className="itemText">Click on here
                </p></Link>
                <li className="item_name">About us</li>
                <Link className = "check-link" to ="/description"> <p className="itemText">Click on here
                </p></Link>
                <li className="item_name">Homepage</li>
                <Link className = "check-link" to ="/"> <p className="itemText">Click on here to access the homepage
                </p></Link>
                <li className="item_name">Membership Area</li>
                <p className="itemText">Only logged in users can start a <Link className = "check-link" to="/quiz"> quiz </Link>or see their <Link className = "check-link" to="/profile"> profile </Link>. If the user is not logged in, they will be redirected to a register page or login page.
                </p>
                <li className="item_name">General User</li>
                <p className="itemText">username: <strong>ForWebProgramming</strong></p>
                <p className="itemText">password: <strong>WebProg2021</strong></p>
                <li className="item_name">Javascript Usage</li>
                <p className="itemText">We use Javascript in <Link className = "check-link" to="/register"> register </Link>, <Link className = "check-link" to="/login"> login </Link>, <Link className = "check-link" to="/profile"> profile </Link>, <Link className = "check-link" to="/leaderboard"> leaderboard </Link> and <Link className = "check-link" to="/quiz"> quiz </Link>. we mainly used it when making api calls, but in login we use it with context api. We also use it exclusively in the node backend
                to log in users.
                </p>
                <li className="item_name">Database Usage</li>
                <p className="itemText">We use MongoDB to store and retrieve data for our website. We primarily use it for storing user information in the <Link className = "check-link" to="/register"> register </Link> page as well as retrieve a user when they logging in
                    the <Link className = "check-link" to="/login"> login </Link> page. In addition, we also use our database to save the user score whenever they complete quiz, and we retrieve that data in the profile page.
                </p>
                <li className="item_name">Ajax Usage</li>
                <p className="itemText">
                    We use Axios(A javascript library) to make ajax request to the trivia api to generate a <Link className = "check-link" to="/quiz"> quiz </Link>, to get all of the users in the <Link className = "check-link" to="/leaderboard"> leaderboard </Link>, to get user information in <Link className = "check-link" to="/profile"> profile </Link>. We also use it for registering and logging in users.
                </p>
                <li className="item_name">New Library Usage Javascript Usage</li>
                <p className="itemText">
                    New libary that we used include React which we use to consume our api in the frontend, Axios to make the ajax requests and Datasort which is the library that we use to display the <Link className = "check-link" to="/leaderboard"> leaderboard </Link>(renders a table with functionalities like sorting with minimal code).
                </p>
            </ul>
        </div>
    )
}
