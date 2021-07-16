import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./HomePage.jsx";
import "./App.css";
import LoadingScreen from "./components/loadingScreen/LoadingScreen.jsx";
class App extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }
  render() {
    return this.state.loading ? (
      <LoadingScreen />
    ) : (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
