import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/App.css";
import "./assets/css/Login.css";

const Login = () => {
  return (
    <div id="auth">
      <div className="row h-100">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <a href="index.html">
                {/* <img src={logo} alt="Logo" /> */}
                <h1 className="text-center">Task N Reward</h1>
              </a>
            </div>
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with the credentials that you received from Admin!
            </p>

            <form action="index.html">
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="email"
                  className="form-control form-control-xl"
                  placeholder="Username"
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
                  required
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>

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
