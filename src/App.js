import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import MainPage from "./pages/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import MobileApp from "./pages/services/mobileApp/mobileapp";
import AndroidApp from "./pages/services/mobileApp/androidapp/AndroidApp";
import IosApp from "./pages/services/mobileApp/iosapp/IosApp";
import ReactNative from "./pages/services/mobileApp/reactnative/ReactNative";
import FlutterApp from "./pages/services/mobileApp/flutterapp/FlutterApp";
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
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/mobile-app-development" component={MobileApp} />
            <Route exact path="/services/mobile-app-development/android-app-development" component={AndroidApp} />
            <Route exact path="/services/mobile-app-development/ios-development" component={IosApp} />
            <Route exact path="/services/mobile-app-development/react-native-app-development" component={ReactNative} />
            <Route exact path="/services/mobile-app-development/flutter-app-development" component={FlutterApp} />
            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
