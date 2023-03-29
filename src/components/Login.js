import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password.length < 6) {
      alert(
        "Enter Your Email & Password First !"
      );
    } else if (email === "") {
      alert("please enter your email");
    } else {
      navigate("/Home");
    }
  };
  return (
    <div className="main-form">
      <div className="container form-section">
        <div className="left">
          <h1>
            Wellcome back to <br /> Pretty Login
          </h1>
          <p>it's great to have you back!</p>
          <label>EMAIL</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>PASSWORD</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div>
            <input
              style={{ backgroundColor: "#d430b4" }}
              type="checkbox"
              value="checked"
            />{" "}
            Remember me?
            <p>Forgot password?</p>
          </div>
          <div className="div-btn">
            <button className="login-btn" onClick={handleLogin}>
              Log In
            </button>

            <button className="create-btn">CREATE ACCOUNT</button>
          </div>
          <div>
            <p>Or log In With</p>
            <p style={{ color: "blue", textDecoration: 'underline' }}>Facebook Or Google</p>
          </div>
        </div>

        <div className="right">
          <img src="https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=380" />
        </div>
      </div>
    </div>
  );
}
export default Login;
