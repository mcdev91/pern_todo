import React, { Fragment, Component } from "react";
import "./App.css";

// components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'McDev'
    }
  }

  getData() {
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello McDev'
      })
      console.log(data);
    }, 1000)
  }

  componentDidMount() {
    this.getData();
  }

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

// function App() {
//   return (
//     <Fragment>
//       <div className="container">
//         <InputTodo />
//         <ListTodos />
//       </div>
//     </Fragment>
//   );
// }

export default App;
