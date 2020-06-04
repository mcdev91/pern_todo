// import React, { Fragment } from "react";
import "./App.css";

// components
// import InputTodo from "./components/InputTodo";
// import ListTodos from "./components/ListTodos";

import React, { Component, Fragment } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import UserInfo from './components/UserInfo/UserInfo';
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import './App.css';

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {
          this.state.route === "home"
            ? <div>
              <UserInfo
                name={this.state.user.name}
                id={this.state.user.id}
              />
              <InputTodo loadUser={loadUser} />
              <ListTodos />
              <div className="cf-ns nl2 nr2">

              </div>

            </div>
            : (
              this.state.route === "signin"
                ? <SignIn
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}
                />
                : <Register
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange} />
            )
        }
      </div>
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
