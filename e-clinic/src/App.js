import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/LandingPage/Landingpage';
import Signup from './Components/Auth/Signup';
import './Components/Auth/Auth.css';
import Login from './Components/Auth/Login';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />}/>
          <Route path='login' element={<Login />}/>
          <Route path='sign-up'element={<Signup />}/>
        </Routes>
      </Router>
      
       {/*for Signup page*/}
       {/*for login page*/}
      {/*kindly install poppins font family, i couldn't do it'*/}

    </>
  );
}

export default App;
