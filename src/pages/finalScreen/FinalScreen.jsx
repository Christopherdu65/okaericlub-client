
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Title = styled.h1`
    font-family: 'lora', sans-serif;
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const Message = styled.h2`
    font-family: 'lora', sans-serif;
    margin-top: 2em;
    font-size: 15px;
`;

const FinalScreen = ({pts}) => {

    const refreshPage = () => window.location.reload();

    const msg = ({pts}) =>{
        if(pts < 5){
            return (
                <p>Failure is simply the opportunity to begin again, this time more intelligently</p>
        )
    }
        else if(pts >= 5 && pts < 8){
            return(
                <p>You're doing great. Keep it up!</p>
            )
        }
        else{
            return(
                <p>Excellent! you got the best luck in town</p>
            )
        }
}

    return (
        <>
            <Title>Game Over</Title>
            <Points>You scored {pts}  out of 10</Points>
            <Message>{msg({pts})}</Message>
            <button className="sidebar-btn"onClick={refreshPage}>Retry</button>
            {/* <Link to="/quiz"><button className="sidebar-btn">Retry</button></Link> */}
            <Link to="/leaderboard"><button className="sidebar-btn"> Leaderboard</button></Link>
        </>
    )
}

export default FinalScreen