import React, { useState } from "react";
import ShopingImage from "../assets/Shoping.JPG";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in", { email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="loginContainer">
      <div className="loginImage">
        <img src={ShopingImage} alt="Shopping" />
      </div>
      <div className="loginForm">
        <h2>Log in to Your Account</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="loginForgotBtn">
            <button type="submit" className="loginBtn">
              Log in
            </button>
            <button type="button" className="forgotPassBtn">
              Forget Password?
            </button>
          </div>

          <p>
            Don't have an account?{" "}
            <span
              className="linkBtn"
              onClick={() => props.onFormSwitch("createAccount")}
            >
              Create here.
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
