import "../forms.css";
import Text from "./Text";
import { useState, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Background from "./Background";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import TitanLogo from "../assets/TitanLogo.png";
import TitanLogo2 from "../assets/Logo2.png";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";

function FormSwitch() {
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSwitcherClick = (form) => {
    setActiveForm(form);
  };

  const onEmailChanged = e => setEmail(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)
  
  const onLogin = () => {
    if(email && password && document.getElementById("input-with-sx").checkValidity()){
      dispatch(userActions.login({email: email}))
    }
  }
  
  
  if(user.state.email){
    console.log('here')
    return <Navigate replace to = '/home' />
  }
  return (
    <section className="forms-section">
      <Background />
      <Text />
      <div className="forms">
        <div
          className={`form-wrapper ${
            activeForm === "login" ? "is-active" : ""
          }`}
        >
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => handleSwitcherClick("login")}
          >
            <AccountCircle sx={{ mr: 1, my: 2.5 }}></AccountCircle>
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login">
            <div className="image-container">
              <img src={TitanLogo} alt="My Image" className="img1" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter"> Login PAGE</h3>
                </div>
              </div>
            </div>
            <Box sx={{ padding: 10 }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 3.5 }} />
              <TextField
                id="input-with-sx"
                label="E-mail"
                variant="standard"
                type="email"
                required
                className="box-1"
                onChange={onEmailChanged}
              />

              <Box>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 2.5 }} />
                <TextField
                  htmlFor="login-password"
                  id="login-password"
                  type="password"
                  required
                  label="Password"
                  variant="standard"
                  className="box-1"
                  onChange={onPasswordChanged}
                />
              </Box>
            </Box>

            <button type="submit" className="btn-login" onClick={onLogin}>
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Login</span>
              </a>
            </button>
          </form>
        </div>
        <div
          className={`form-wrapper ${
            activeForm === "signup" ? "is-active" : ""
          }`}
        >
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => handleSwitcherClick("signup")}
          >
            <HowToRegRoundedIcon sx={{ mr: 1, my: 2.5 }}></HowToRegRoundedIcon>
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup">
            <fieldset>
              <div className="image-container">
                <img src={TitanLogo2} alt="My Image" className="img1" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 className="animate-charcter"> Signup Page</h3>
                  </div>
                </div>
              </div>
              <Box sx={{ padding: 10 }}>
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 2.5 }} />
                <TextField
                  id="signup-email"
                  label="E-mail"
                  variant="standard"
                  type="email"
                  required
                  className="box-1"
                />
                <Box>
                  <LockIcon sx={{ color: "action.active", mr: 1, my: 2.5 }} />
                  <TextField
                    htmlFor="login-password"
                    position="start"
                    id="signup-password"
                    type="password"
                    required
                    label="Password"
                    variant="standard"
                    className="box-1"
                  />
                </Box>
                <Box>
                  <PasswordRoundedIcon
                    sx={{ color: "action.active", mr: 1, my: 3 }}
                  />
                  <TextField
                    htmlFor="signup-password-confirm"
                    position="start"
                    id="signup-password-confirm"
                    type="password"
                    required
                    label="Password"
                    variant="standard"
                    className="box-1"
                  />
                </Box>
              </Box>
            </fieldset>
            <button type="submit">
              <a
                href="#_"
                className="relative items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Sign Up</span>
              </a>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSwitch;