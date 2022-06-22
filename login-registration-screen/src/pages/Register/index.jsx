import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";

import img from "../../assets/user-new.png"; 

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Create an account!</span>
        <span className="login-form-title">
          <img src={img} alt="newUSer" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Name"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Register</button>
        </div>

        <div className="text-center">
          <span className="txt1"> Already have an account?</span>
          <Link className="txt2" to="/login">
           Log in.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
