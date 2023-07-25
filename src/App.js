import "./App.css";
import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "./assets/sass/main.scss";
import Header from "./components/header/Header";
import MainPage from "./pages/home/Index";
import About from "./pages/about/Index";


function App() {
  return (
    <div className="App">
       <Router>
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
