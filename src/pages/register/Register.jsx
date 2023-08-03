import axios from "axios";
import { nextDay } from "date-fns/esm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Login = () => {
  const [information, setInformation] = useState({
    username: undefined,
    email:undefined,
    country:undefined,
    city:undefined,
    phone:undefined,
    isAdmin:false,
    password: undefined,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInformation((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://troubled-waistcoat-lamb.cyclic.cloud/api/auth/register", information);
      navigate("/")
    } catch (err) {
      nextDay(err);
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <div className="country">
          <input
            type="text"
            placeholder="country"
            id="country"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="text"
            placeholder="city"
            id="city"
            onChange={handleChange}
            className="lInput"
          />
        </div>
        <input
          type="text"
          placeholder="phone no"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button  onClick={handleClick} className="lButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
