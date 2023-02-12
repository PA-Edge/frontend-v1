import React, { useState } from "react";
// import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import './App.css';
import { MantineProvider, AppShell, Header, Box } from "@mantine/core"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import Home from "./components/Home"
import Honeycomb from "./components/Honeycomb"
import Damages from "./components/Damages";
import DamageRatio from "./components/DamageRatio"
import DamageRatioInsights from "./components/DamageRatioInsights"
import LAFRatio from "./components/LAFRatio"
import SplashPage from "./components/SplashPage";
// import NotFound from "./components/NotFound"
// import { useSelector, useDispatch } from "react-redux"

function App() {
  return (
    <Router>
      <NavBar />
      <Box className="appbody">
        <Routes>
          {/* <AuthenticatedTemplate>
            <Route className="home" exact path="/" element={<Home />} />
            <Route path="/damage-ratio" element={<DamageRatio />} />
            <Route path="/damage-ratio-insights" element={<DamageRatioInsights />} />
            <Route path="/locator-at-fault-ratio" element={<LAFRatio />} />
          </AuthenticatedTemplate> */}
          <Route className="home" exact path="/" element={<Home />} />
          <Route path="/damages" element={<Damages />} />
          <Route path="/damage-ratio" element={<DamageRatio />} />
          <Route path="/damage-ratio-insights" element={<DamageRatioInsights />} />
          <Route path="/locator-at-fault-ratio" element={<LAFRatio />} />
          {/* <UnauthenticatedTemplate> */}
            <Route path="/sign-on" element={<SplashPage />} />
          {/* </UnauthenticatedTemplate> */}
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
