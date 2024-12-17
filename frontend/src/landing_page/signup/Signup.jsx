import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"



function Signup() {
  const navigate = useNavigate();
const [inputValue, setInputValue] = useState({
  email: "",
  password: "",
  username: "",
});
const { email, password, username } = inputValue;
const handleOnChange = (e) => {
  const { name, value } = e.target;
  setInputValue({
    ...inputValue,
    [name]: value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post(
      "https://zerodha-new-clone.onrender.com/signup",
      {
        ...inputValue,
      },
      { withCredentials: true }
    );
    const { success, message } = data;
    if (success) {
      setTimeout(() => {
        window.location.href = "zerodha-new-clone-7v85w2ujo-subha-karmakars-projects-dee2d897.vercel.app"
      }, 1000);
    } else {
     alert(message)
    }
  } catch (error) {
    console.log(error);
  }
  setInputValue({
    ...inputValue,
    email: "",
    password: "",
    username: "",
  });
};
  return (
      <div className='sig p-5' style={{ display: "flex" , justifyContent: "center" , alignItems: "center"}}>
      <div className="form_container mt-5">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <Link to={"/login"}>
        <button type="submit">Submit</button>
        </Link>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
    </div>
  );
}

export default Signup