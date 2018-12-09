import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layout";
import Excersises from "./Excercises";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Excersises />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
