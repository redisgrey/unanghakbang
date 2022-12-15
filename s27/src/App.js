import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';

/*components*/
import AppNavBar from './Components/AppNavBar'

/*Pages*/
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <Router>
      <AppNavBar />
      <Routes>
        <Route path="/home" element ={<Home />}/>
        <Route path="/login" element ={<Login />}/>
        <Route path="/register" element = {<Register />} />
      </Routes>
    </Router>
  );
}