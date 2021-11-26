import { Link } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sid-container">
            <p className="sid-info">Check out the leaderboard or begin a quiz here </p>
            <Link to="/quiz"><button className="sidebar-btn">Quiz</button></Link>
            <Link to="/leaderboard"><button className="sidebar-btn">Leaderboard</button></Link>
        </div>
        </div>
    )
}
