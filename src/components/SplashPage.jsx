import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import logo from './images/EDGE_logo.png';
import './SplashPage.css';

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export default function SplashPage() {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e);
      });
    }
  }
  return (
    <div className="splashContainer">
      <img width={200} src={logo} alt="EDGE" />
      <button className="loginButton" onClick={() => handleLogin("redirect")}>Sign On</button>
    </div>
  );
}