import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./assets/sass/main.scss";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/home";
import About from "./pages/about/about";
import Services from "./pages/services/services";
import MobileApp from "./pages/services/mobileApp/mobileapp";
import AndroidApp from "./pages/services/mobileApp/androidapp/AndroidApp";
import IosApp from "./pages/services/mobileApp/iosapp/IosApp";
import ReactNative from "./pages/services/mobileApp/reactnative/ReactNative";
import FlutterApp from "./pages/services/mobileApp/flutterapp/FlutterApp";
import WebApplication from "./pages/services/web-application/web-application";
import WebApplicationFullStack from "./pages/services/web-application/fullstack/FullStack";
import WebApplicationReactJS from "./pages/services/web-application/reactjs/ReactJS";
import WebApplicationNodeJs from "./pages/services/web-application/nodejs/NodeJs";
import WebApplicationVueJS from "./pages/services/web-application/vuejs/VueJS";
import WebApplicationJavaApp from "./pages/services/web-application/javaapp/JavaApp";
import WebApplicationPhpWebsite from "./pages/services/web-application/phpwebsite/PhpWebsite";
import WebApplicationPython from "./pages/services/web-application/python/Python";
import DigitalMarketing from "./pages/services/digital-marketing/digital-marketing";
import DigitalMarketingSeo from "./pages/services/digital-marketing/seo/Seo";
import DigitalMarketingSmo from "./pages/services/digital-marketing/smo/Smo";
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
            <Route
              exact
              path="/services/mobile-app-development"
              component={MobileApp}
            />
            <Route
              exact
              path="/services/mobile-app-development/android-app-development"
              component={AndroidApp}
            />
            <Route
              exact
              path="/services/mobile-app-development/ios-development"
              component={IosApp}
            />
            <Route
              exact
              path="/services/mobile-app-development/react-native-app-development"
              component={ReactNative}
            />
            <Route
              exact
              path="/services/mobile-app-development/flutter-app-development"
              component={FlutterApp}
            />
            <Route
              exact
              path="/services/web-app-development/flutter-app-development"
              component={FlutterApp}
            />
            <Route
              exact
              path="/services/web-development-services"
              component={WebApplication}
            />
            <Route
              exact
              path="/services/web-development-services/full-stack-development"
              component={WebApplicationFullStack}
            />
            <Route
              exact
              path="/services/web-development-services/react-development"
              component={WebApplicationReactJS}
            />
            <Route
              exact
              path="/services/web-development-services/node-development"
              component={WebApplicationNodeJs}
            />
            <Route
              exact
              path="/services/web-development-services/vue-development"
              component={WebApplicationVueJS}
            />
            <Route
              exact
              path="/services/web-development-services/java-development"
              component={WebApplicationJavaApp}
            />
            <Route
              exact
              path="/services/web-development-services/php-development"
              component={WebApplicationPhpWebsite}
            />
            <Route
              exact
              path="/services/web-development-services/python-app-development"
              component={WebApplicationPython}
            />
            <Route
              exact
              path="/services/digital-marketing-services"
              component={DigitalMarketing}
            />
            <Route
              exact
              path="/services/digital-marketing-services/search-engine-optimization"
              component={DigitalMarketingSeo}
            />
            <Route
              exact
              path="/services/digital-marketing-services/social-media-optimization"
              component={DigitalMarketingSmo}
            />

            <Route exact path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
