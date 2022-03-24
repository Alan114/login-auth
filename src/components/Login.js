import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
  console.log(JSON.stringify(credentials));
  // return fetch("http://localhost:8080/login", {
  try {
    return fetch("https://api.idkerp.com/api/Auth/User/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  } catch (error) {
    console.log("error happened here");
    console.error(error);
  }
}

const Login = ({ setToken }) => {
  const [email, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    console.log(token);
  };

  return (
    <div className="login-wrapper">
      <h1>Please log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
