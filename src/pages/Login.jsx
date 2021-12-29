import { React, useState, useContext } from "react";
import Meta from "../components/Meta";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/App.css";
import "./assets/css/Login.css";

import ErrorMessage from "../components/ErrorMessage";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const pageTitle = "Login Page";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch(
      "https://kamal-taskapi.herokuapp.com/login",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <div id="auth">
      <Meta title={pageTitle} />
      <div className="row h-100">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-12">
          <div id="auth-left">
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with the credentials that you received from Admin!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="email"
                  className="form-control form-control-xl"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>

              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>

              <ErrorMessage message={errorMessage} />

              <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
