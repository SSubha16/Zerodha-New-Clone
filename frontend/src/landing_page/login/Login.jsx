import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "../style.css"




const Login = () => {
  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target ;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) =>
  {
    <div style={{width:'500px'}} className=" alert alert-warning alert-dismissible fade show" role="alert">
    <strong>User login successfully</strong> 
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-new-clone.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
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
    });
  };

  return (
    <div className='sig p-5' style={{ display: "flex" , justifyContent: "center" , alignItems: "center"}}>
    <div  className="form_container mt-5">
      <h2>Login Account</h2>
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
        
        <button type="submit" onClick={ () => {
          window.location.href = "zerodha-new-clone-7v85w2ujo-subha-karmakars-projects-dee2d897.vercel.app"
        }}>Submit</button>
        
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
    </div>
  );
};

export default Login;