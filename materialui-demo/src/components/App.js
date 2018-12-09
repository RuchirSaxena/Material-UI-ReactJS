import React, { Fragment } from "react";
import { Header, Footer } from "./Layout";
import Excersises from "./Excercises";
import { muscles, exercises } from "../store";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Excersises />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
export default App;
