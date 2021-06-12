import React, { Component } from "react"
import { BrowserRouter } from "react-router-dom"
import './App.css';
import Main from "./components/maincomponent"
import {Provider}  from "react-redux"
import {ConfigureStore} from "./redux/configurestore"

const store=ConfigureStore();
class App extends Component {
render() {
    return (
    <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    </Provider>
    );
  }
}

export default App;


