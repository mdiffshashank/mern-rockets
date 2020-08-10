import React from "react";
import { Provider } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import store from "../store";
import "./spaceX.css";

function Spacex() {
  return (
    <Provider store={store}>
      <div className="spaceX">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default Spacex;
