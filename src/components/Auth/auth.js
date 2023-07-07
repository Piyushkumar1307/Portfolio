import React, { useState } from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length === 6);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-backend-em5j.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Login successful, handle the desired behavior (e.g., show success message, redirect, etc.)
        alert("Login Success");
        navigate("/action"); // Redirect to the dashboard page
      } else {
        // Login failed, handle the desired behavior (e.g., show error message)
        alert("Wrong Credentials");
      }
    } catch (error) {
      // Handle network or server errors
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div>
        <h2>Enter your details</h2>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="password-container">
        <label>Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          type="button" // Set the button type to "button" instead of "submit"
          className="show-password-btn"
          onClick={handleTogglePassword}
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
      <button
        className={`${
          !isPasswordValid ? "shift-left" : isPasswordValid ? "shift-right" : ""
        }`}
        type="submit"
      >
        Submit
      </button>
      <div className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default Auth;
