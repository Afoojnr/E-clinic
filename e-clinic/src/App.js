import logo from './logo.svg';
import './App.css';
import Landingpage from './Components/LandingPage/Landingpage';
import Signup from './Components/Auth/Signup';
import './Components/Auth/Auth.css';
import Login from './Components/Auth/Login';



function App() {
  return (
    <>
      <Landingpage />
      <Signup /> {/*for Signup page*/}
      <Login /> {/*for login page*/}
      {/*kindly install poppins font family, i couldn't do it'*/}

    </>
  );
}

export default App;
