import React, { Fragment, Component } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

class App extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <InputTodo />
          <ListTodos />
        </div>
      </Fragment>
    );
  }

}

export default App;
