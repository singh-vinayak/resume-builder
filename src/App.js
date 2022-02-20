import React from "react";

import "./static/scss/app.scss";
import "react-router-dom";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/presentation/header";
import Footer from "./components/presentation/footer";
import LandingPage from "./components/presentation/landingPage";
import GettingStarted from "./components/presentation/gettingStarted";
import Login from "./components/presentation/login";
import Register from "./components/presentation/register";
import AboutUs from "./components/presentation/aboutUs";
import Contacts from "./components/presentation/contact";
import Education from "./components/presentation/education";
import Finalize from "./components/presentation/finalizePage";
import PrivateRoute from "./components/presentation/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <Switch>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/education" element={<PrivateRoute />}>
            <Route path="/education" element={<Education />} />
          </Route>
          <Route exact path="/contact" element={<PrivateRoute />}>
            <Route path="/contact" element={<Contacts />} />
          </Route>
          <Route exact path="/resume-templates" element={<PrivateRoute />}>
            <Route path="/resume-templates" element={<GettingStarted />} />
          </Route>
          <Route exact path="/getting-started" element={<PrivateRoute />}>
            <Route path="/getting-started" element={<GettingStarted />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route exact path="/finalize" element={<PrivateRoute />}>
            <Route exact path="/finalize" element={<Finalize />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
