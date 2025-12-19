import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Enter email" />
              <input type="password" placeholder="Enter password" />
              <a href="#">Forgot password</a>
              <button>Login</button>
              <p>
                Not a member ?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup Now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="Enter email" />
              <input type="password" placeholder="Enter password" />
              <input type="password" placeholder="confirm password" />

              <button>Signup </button>
              <p>
                Already a member?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>
                  {" "}
                  Login Now
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
