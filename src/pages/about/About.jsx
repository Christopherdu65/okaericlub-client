import React from 'react'
import './about.css'
export default function About() {
    return (
        <div className="checklist">
        <div className="checklistTitle">About Us</div>
        <ul className="checklist_Item">
            <li className="item_name">Who we are</li>
            <p className="itemText">I am Christopher Raoul, a junior majoring in CS at Georgia State University.</p>
            <p className="itemText">I am building this webstie as my final project for my web programing class.</p>
            <p className="itemText">I like anime obviously, but I am also into baseball and I can sing a thing or two in French(maybe I should have added my soundcloud here).</p>
            <li className="item_name">What and Why</li>
            <p className="itemText">My website is an anime trivia. Each quiz consists of ten questions chosen randomly from a trivia api. After each party, the user can go on the leaderboard to see how they fare against the competiiton
            </p>
            <p className="itemText">I chose this because I believed it was a project that was going to make me learn new things without too much complexity. 
            I also believe it is fun enough and it can provide a great experience to anyone.
            </p>
            <li className="item_name">Technology Used</li>
            <p className="itemText">
                We use <span className="tech-title">Node.js</span> to build the backend for the website with <span className="tech-title">MongoDb</span> as the database to store and retrieve users information
            </p>
            <p className="itemText">
                We use <span className="tech-title">React.js</span> to build the frontend for the website and consume our backend. 
            </p>
            <p className="itemText">The website is deployed and hosted on Heroku</p>
            <li className="item_name">What we learned</li>
            <p className="itemText">It was my first time doing any php&mysql and jquery, so it was nice to get a start on that. I feel like this class made me better at learning things in general, organizing myself and actually doing things. 
            </p>
            <p className="itemText">I also had to learn Node and React to make this project so I guess it can count as something I learned. 
            </p>
        </ul>
    </div>
    )
}
