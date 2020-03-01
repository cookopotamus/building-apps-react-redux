import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./about/AboutPage";
import { Header } from "./common/Header";
import HomePage from "./home/HomePage";
import PageNotFound from "./PageNotFound";
import ConnectedCoursesPage from "../containers/courses/ConnectedCoursesPage";
import ConnectedManageCoursePage from "../containers/courses/ConnectedManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={ConnectedCoursesPage} />
        <Route path="/course/:slug" component={ConnectedManageCoursePage} />
        <Route path="/course" component={ConnectedManageCoursePage} />
        <Route component={PageNotFound}></Route>
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
