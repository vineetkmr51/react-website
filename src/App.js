
import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
import "./assets/sass/main.scss";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/Header";
import MainPage from "./pages/home";
import About from "./pages/about/about";

function App() {
  return (
    <div className="App">
    <Router>
    <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about-us" component={About} />
        </Switch>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
