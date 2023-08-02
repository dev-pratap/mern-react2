import "./navbar.css";
import { Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { faRodAsclepius } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const {dispatch } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate=useNavigate();


  const handleClick=()=>{
    dispatch({type: "LOGOUT"});
    navigate("/");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">GetSetBooking</span>
        </Link>
        <div className="regLog">
          {user ? user.username : (
            <div className="navItems">
              <Button className="navButton" >
                <Link to="/register">Register</Link>
              </Button>
              <Button className="navButton">
                <Link to="/login" style={{color:"inherit" , textDecoration:"none"}}>
                  <span>Login</span>
                </Link>
            </Button>
          </div>
        )}
        {user?(<>
          <div className="navItems">
            <Button className="navButton" onClick={handleClick} >
                <span >LogOut</span>
            </Button>
          </div>
        </>):("") }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
