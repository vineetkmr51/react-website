import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/Header";
import MainPage from "./pages/home";
import About from "./pages/about/about";
import PageNotFound from "./pages/page-not-found/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<div>test...</div>}>
          <Switch>
         
            <Route exact path="/" component={MainPage} />

            <Route exact path="/about-us" component={About} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
