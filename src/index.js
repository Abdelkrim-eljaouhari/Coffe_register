import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import coffeRegister from "./routers/coffeRegister";
import homePage from "./routers/homePage";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import getStore from "./store/store";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <SideBar />
      <div className="container">
        <Route path="/" component={homePage} exact />
        <Route path="/types" component={coffeRegister} />
      </div>
    </div>
  </BrowserRouter>
);
const store = getStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(jsx, rootElement);
