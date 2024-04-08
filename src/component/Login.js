import { useState } from "react";
import "../App.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email or Username</div>
        <input
          type="text"
          placeholder="Email or Username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i class="fa-solid fa-eye"></i>
          <i class="fa-solid fa-eye-slash"></i>
        </div>

        <button className={email && password ? "active" : ""}>Login</button>
        <div className="back">
          <i className="fa-solid fa-arrow-left mx-2"></i>
          Go back
        </div>
      </div>
    </>
  );
};

export default Login;
