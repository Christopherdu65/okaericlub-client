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
                <p className="itemText">Only logged in users can start a <Link className = "check-link" to="/quiz"> quiz </Link>or see their profile. If the user is not logged in, they will be redirected to a register page.
                </p>
                <li className="item_name">General User</li>
                <p className="itemText">username: <strong>ForWebProgramming</strong></p>
                <p className="itemText">password: <strong>WebProg2021</strong></p>
                <li className="item_name">Javascript Usage</li>
                <p className="itemText">We use Javascript in register, login, profile, leaderboard and quiz. we mainly used it when making api calls, but in login we use it with context api
                to log in users.
                </p>
                <li className="item_name">Database Usage</li>
                <p className="itemText">We use MongoDB to store and retrive data for our website. We primarly use it for storing user information in the register page as well as retrieve a user when they logging in
                    the login page. In addition, we also use our database to save the user score whenever they complete quiz, and we retrive that data in the profile page.
                </p>
                <li className="item_name">Ajax Usage</li>
                <p className="itemText">
                    We use Axios(A javascript library) to make ajax request. We use Trivia api to generate a url with the quiz questions, then we use the get method from axios with the generated url
                    as a parameter in order to make the ajax request(which return each question and its answer).
                </p>
                <li className="item_name">New Library Usage Javascript Usage</li>
                <p className="itemText">
                    New libary that we used include React which we use to consume our api in the frontend, Axios to make the ajax requests and Datasort which is the library that we use to display the leaderboard(renders a table with functionalities like sorting with minimal code).
                </p>
            </ul>
        </div>
    )
}
