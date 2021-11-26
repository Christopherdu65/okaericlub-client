import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Quiz from "./pages/quiz/Quiz";
import LeaderBoard from "./pages/leaderboard/Leaderboard"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checklist from "./pages/checklist/Checklist";
import { useContext } from "react";
import { Context } from "./context/Context";
import Description from "./pages/description/Description";
import About from "./pages/about/About"

function App() {
  const {user} = useContext(Context);
  return (
    // <Router>
    //   <TopBar/>
    //   <Switch>
    //     <Route path="/" element={<Home/>}>
    //     </Route>
    //     <Route path="/quiz" element={<Quiz/>}>
    //     </Route>
    //     <Route path="/leaderboard" element={<LeaderBoard/>}>
    //     </Route>
    //     {/* <Route path="/score" element={<FinalScreen/>}>
    //     </Route> */}
    //     <Route path="/profile/:userId" element={<Profile/>}>
    //     </Route>
    //     <Route path="/login" element={<Login/>}>
    //     </Route>
    //     <Route path="/register"> 
    //     {user ?
    //     <Home/>: <Register/>}
    //     </Route>
    //     <Route path="/checklist" element={<Checklist/>}>
    //     </Route>
    //   </Switch>
    // </Router>
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/"> <Home/>
      </Route>
      <Route path="/quiz">
        {user? <Quiz/> : <Register/> }
      </Route>
      <Route path="/leaderboard"> <LeaderBoard/>
      </Route>
      <Route path="/about"> <About/></Route>
      <Route path="/description"> <Description/>
      </Route>
      <Route path="/profile">{user? <Profile/>: <Login/>}
      </Route>
      <Route path="/login"> {user? <Home/> : <Login/>}
      </Route>
      <Route path="/register"> 
      {user ?
      <Home/>: <Register/>}
      </Route>
      <Route path="/checklist"> <Checklist/>
      </Route>
    </Switch>
  </Router>
    // <div className="App">
    //   <TopBar />
    //   <Home />
    // </div>
  );
}

export default App;
